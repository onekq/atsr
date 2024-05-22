import { signUp, confirmSignUp, fetchAuthSession, decodeJWT } from '@aws-amplify/auth';
import { CognitoIdentityProviderClient, AdminAddUserToGroupCommand } from "@aws-sdk/client-cognito-identity-provider";
import { buildAuthProvider as originalBuildAuthProvider } from 'react-admin-amplify-6';
import { getPermissionsFromRoles } from "../rbac/getPermissionsFromRoles";

const buildAuthProvider = (options: any) => {
  const baseAuthProvider = originalBuildAuthProvider(options);
  const roleDefinitions = options.roleDefinitions;

  const extendedAuthProvider = {
    ...baseAuthProvider,
    signUp: async (params: any) => {
      const { username, password, email, group } = params;
        // Perform the signup
        const signUpResponse = await signUp({
          username: username.toLowerCase(),
          password,
          options: {
            userAttributes: {
              email: email.toLowerCase()
            }
          }
        });

        if (group) {
          const client = new CognitoIdentityProviderClient({ region: "us-west-1" });
          const input = {
            UserPoolId: "us-west-1_lwNL26Pgo",
            Username: username.toLowerCase(),
            GroupName: group
          };
          const command = new AdminAddUserToGroupCommand(input);
          const response = await client.send(command);
        }

        return { username, email };
    },

    confirmSignUp: async (params: any) => {
      const { username, code } = params;
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: username.toLowerCase(),
        confirmationCode: code
      });
      return isSignUpComplete;
    },

    getPermissions: async () => {
      const session:any = await fetchAuthSession();
      const token = session.tokens.idToken.toString();
      const decodedToken = decodeJWT(token);
      const groups = decodedToken.payload['cognito:groups'];  
  
      const permissions = getPermissionsFromRoles({
          roleDefinitions: roleDefinitions,
          userRoles: groups && Array.isArray(groups) ? groups.map(e => `${e}`) : [],
          userPermissions: []
      });
      return permissions;
    }
  };

  return extendedAuthProvider;
};

export default buildAuthProvider;
