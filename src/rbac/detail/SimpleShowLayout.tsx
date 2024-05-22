import * as React from 'react';
import { Children, isValidElement } from 'react';
import {
    SimpleShowLayout as RaSimpleShowLayout,
    SimpleShowLayoutProps,
    usePermissions,
    useRecordContext,
    useResourceContext,
} from 'react-admin';

import { canAccess } from '../canAccess';

/**
 * Alternative to react-admin's <SimpleShowLayout> that adds RBAC control to fields
 *
 * To see a column, the user must have the permission to read the resource column:
 * { "action": "read", "resource": `${resource}.${source}` }
 *
 * @example
 * import { SimpleShowLayout } from '@react-admin/ra-rbac';
 *
 * const authProvider= {
 *     // ...
 *     getPermissions: () => Promise.resolve([
 *         { action: ['list', 'show'], resource: 'products' },
 *         { action: 'read', resource: 'products.reference' },
 *         { action: 'read', resource: 'products.width' },
 *         { action: 'read', resource: 'products.height' },
 *         // 'products.description' is missing
 *         // 'products.image' is missing
 *         { action: 'read', resource: 'products.thumbnail' },
 *         // 'products.stock' is missing
 *     ]),
 * };
 *
 * const ProductShow = () => (
 *     <Show>
 *         <SimpleShowLayout> // <-- RBAC SimpleShowLayout
 *             <TextField source="reference" />
 *             <TextField source="width" />
 *             <TextField source="height" />
 *             // not displayed
 *             <TextField source="description" />
 *             // not displayed
 *             <TextField source="image" />
 *             <TextField source="thumbnail" />
 *             // not displayed
 *             <TextField source="stock" />
 *         </SimpleShowLayout>
 *     </Show>
 * );
 */
export const SimpleShowLayout = (props: SimpleShowLayoutProps) => {
    const resource = useResourceContext();
    const record = useRecordContext();
    const { children, ...rest } = props;
    const { isLoading, permissions } = usePermissions();
    if (isLoading) {
        return null;
    }
    return (
        <RaSimpleShowLayout {...rest}>
            {Children.map(children, child =>
                isValidElement(child) &&
                canAccess({
                    permissions,
                    action: 'read',
                    resource: `${resource}.${(child.props as any).source}`,
                    record,
                })
                    ? child
                    : null
            )}
        </RaSimpleShowLayout>
    );
};

SimpleShowLayout.propTypes = RaSimpleShowLayout.propTypes;
