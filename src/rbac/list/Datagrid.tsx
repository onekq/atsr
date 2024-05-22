import * as React from 'react';
import { Children, isValidElement } from 'react';
import {
    BulkDeleteButton,
    BulkExportButton,
    Datagrid as RaDatagrid,
    DatagridProps,
    useListContext,
    usePermissions,
    useResourceContext,
} from 'react-admin';

import { canAccess } from '../canAccess';

/**
 * Alternative to react-admin's <Datagrid> that adds RBAC control to columns and bulk actions
 *
 * To see a column, the user must have the permission to read the resource column:
 * { "action": "read", "resource": `${resource}.${source}` }
 * Users must have the 'export' permission on the resource to see the BulkExportButton.
 * Users must have the 'delete' permission on the resource to see the BulkExportButton.
 *
 * Also, the rowClick prop is automatically set depending on the user props:
 * - "edit" if the user has the permission to edit the resource
 * - "show" if the user doesn't have the permission to edit the resource but has the permission to show it
 * - empty otherwise
 *
 * @example
 * import { Datagrid } from '@react-admin/ra-rbac';
 *
 * const authProvider= {
 *     // ...
 *     getPermissions: () => Promise.resolve([
 *         { action: "list", resource: "products" },
 *         { action: "read", resource: "products.thumbnail" },
 *         { action: "read", resource: "products.reference" },
 *         { action: "read", resource: "products.category_id" },
 *         { action: "read", resource: "products.width" },
 *         { action: "read", resource: "products.height" },
 *         { action: "read", resource: "products.price" },
 *         { action: "read", resource: "products.description" },
 *     ]),
 * };
 *
 * const ProductList = () => (
 *     <List>
 *         <Datagrid rowClick="edit"> // <-- RBAC Datagrid
 *             <ImageField source="thumbnail" />
 *             <TextField source="reference" />
 *             <ReferenceField source="category_id" reference="categories">
 *                 <TextField source="name" />
 *             </ReferenceField>
 *             <NumberField source="width" />
 *             <NumberField source="height" />
 *             <NumberField source="price" />
 *             <TextField source="description" />
 *             {
 *                // these two columns are not visible to the user
 *             }
 *             <NumberField source="stock" />
 *             <NumberField source="sales" />
 *         </Datagrid>
 *     </List>
 * );
 */
export const Datagrid = (props: DatagridProps) => {
    const resource = useResourceContext();
    const { exporter } = useListContext();
    const { children, ...rest } = props;
    const { isLoading, permissions } = usePermissions();
    if (isLoading) {
        return null;
    }
    const defaultRowClick = canAccess({ permissions, resource, action: 'edit' })
        ? 'edit'
        : canAccess({ permissions, resource, action: 'show' })
        ? 'show'
        : '';
    const canExport = canAccess({
        action: 'export',
        resource,
        permissions,
    });
    const canDelete = canAccess({
        action: 'delete',
        resource,
        permissions,
    });
    const bulkActionButtons =
        props.bulkActionButtons != null ? (
            props.bulkActionButtons
        ) : (exporter !== false && canExport) || canDelete ? (
            <>
                {exporter !== false && canExport && <BulkExportButton />}
                {canDelete && <BulkDeleteButton />}
            </>
        ) : (
            false
        );
    return (
        <RaDatagrid
            rowClick={defaultRowClick}
            {...rest}
            bulkActionButtons={bulkActionButtons}
        >
            {Children.map(children, child =>
                isValidElement(child) &&
                canAccess({
                    permissions,
                    action: 'read',
                    resource: `${resource}.${(child.props as any).source}`,
                })
                    ? child
                    : null
            )}
        </RaDatagrid>
    );
};
