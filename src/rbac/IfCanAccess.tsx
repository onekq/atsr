import * as React from 'react';
import { useRecordContext, useResourceContext } from 'react-admin';

import { useCanAccess } from './useCanAccess';

/**
 * Render the child only if the user has the specified permissions.
 *
 * It accepts the following props:
 *
 * - `action` (string, required): the action to check, e.g. 'read', 'list', 'export', 'delete', etc.
 * - `resource` (string, optional): the resource to check, e.g. 'users', 'comments', 'posts', etc. Falls back to the current resource context if absent.
 * - `record` (object, optional): the record to check. If passed, the child only renders if the user has permissions for that record, e.g. `{ id: 123, firstName: "John", lastName: "Doe" }`
 * - `fallback` (ReactNode, optional): The element to render when the user does not have the permission. Defaults to null.
 *
 * @example <title>Basic Usage</title>
 * import { Toolbar } from 'react-admin';
 * import { IfCanAccess } from '@react-admin/ra-rbac';
 *
 * const RecordToolbar = () => (
 *     <Toolbar>
 *         <IfCanAccess action="edit">
 *             <EditButton />
 *         </IfCanAccess>
 *         <IfCanAccess action="show">
 *             <ShowButton />
 *         </IfCanAccess>
 *         <IfCanAccess action="delete">
 *             <DeleteButton />
 *         </IfCanAccess>
 *     </Toolbar>
 * );
 *
 * @example <title>Showing An Access Denied Message</title>
 * import { Create, SimpleForm, TextInput } from 'react-admin';
 * import { IfCanAccess } from '@react-admin/ra-rbac';
 * import { Typography } from '@mui/material';
 *
 * const PostCreate = () => (
 *     <IfCanAccess action="create" fallback={<AccessDenied />}>
 *         <Create>
 *            <SimpleForm>
 *               <TextInput source="title" />
 *           </SimpleForm>
 *         </Create>
 *     </IfCanAccess>
 * );
 *
 * const AccessDenied = () => <Typography>You don't have the permissions required to create a new post.</Typography>;
 *
 * @example <title>Redirecting on missing permissions</title>
 * import { Create, SimpleForm, TextInput } from 'react-admin';
 * import { IfCanAccess } from '@react-admin/ra-rbac';
 * import { Navigate } from 'react-router-dom';
 *
 * const PostCreate = () => (
 *     <IfCanAccess action="create" fallback={<Navigate to="/access-denied" />}>
 *         <Create>
 *            <SimpleForm>
 *               <TextInput source="title" />
 *           </SimpleForm>
 *         </Create>
 *     </IfCanAccess>
 * );
 */
export const IfCanAccess = (props: IfCanAccessProps) => {
    const { action, children, fallback } = props;
    const record = useRecordContext(props);
    const resource = useResourceContext(props);
    const { canAccess, isLoading } = useCanAccess({ action, resource, record });
    return isLoading ? null : !canAccess ? <>{fallback}</> : <>{children}</>;
};

export interface IfCanAccessProps {
    action: string;
    children: React.ReactNode;
    record?: any;
    resource?: string;
    fallback?: React.ReactNode;
}
