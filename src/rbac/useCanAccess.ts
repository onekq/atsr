import { usePermissions } from 'react-admin';
import { canAccess } from './canAccess';

/**
 * Checks if the user can access a resource.
 *
 * `useCanAccess` returns an object describing the state of the RBAC request.
 * As calls to the `authProvider` are asynchronous, the hook returns
 * a `loading` state in addition to the `canAccess` key.
 *
 * @example
 * import { useCanAccess } from '@react-admin/ra-rbac';
 *
 * const DeleteUserButton = ({ record }) => {
 *     const { isLoading, canAccess } = useCanAccess({ action: 'delete', resource: 'users', record });
 *     if (isLoading || !canAccess) return null;
 *     return <DeleteButton record={record} resource="users" />;
 * };
 */
export const useCanAccess = ({
    action,
    resource,
    record,
}: UseCanAccessParams) => {
    const { permissions, isLoading } = usePermissions();
    return isLoading
        ? { canAccess: false, isLoading: true }
        : {
              canAccess: canAccess({ permissions, action, resource, record }),
              isLoading: false,
          };
};

export interface UseCanAccessParams {
    action: string;
    resource: string;
    record?: any;
}
