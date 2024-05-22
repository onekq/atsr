import { RoleDefinitions, Roles, Permissions } from './types';

/**
 * Given a list of roles definitions, a list of user roles and a list of user permissions, returns the user permissions.
 */
export const getPermissionsFromRoles = ({
    roleDefinitions,
    userPermissions = [],
    userRoles = [],
}: {
    roleDefinitions: RoleDefinitions;
    userPermissions?: Permissions;
    userRoles?: Roles;
}): Permissions => {
    return userRoles.reduce<Permissions>(
        (acc, role) => acc.concat(roleDefinitions[role] ?? []),
        [...userPermissions]
    );
};
