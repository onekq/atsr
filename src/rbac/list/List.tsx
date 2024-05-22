import * as React from 'react';
import { ReactElement } from 'react';
import {
    List as RaList,
    ListProps,
    downloadCSV,
    useResourceContext,
    usePermissions,
} from 'react-admin';
import jsonExport from 'jsonexport/dist';

import { ListActions } from './ListActions';
import { canAccess } from '../canAccess';

/**
 * Replacement for react-admin's List that adds RBAC control to actions
 *
 * Users must have the 'create' permission on the resource to see the `<CreateButton>`.
 * Users must have the 'export' permission on the resource to see the `<ExportButton>`.
 * Users must have the 'read' permission on a resource column to see it in the export.
 *
 * @example
 * import { List } from '@react-admin/ra-rbac';
 *
 * const authProvider = {
 *     // ...
 *     getPermissions: () =>
 *         Promise.resolve([
 *             { action: 'list', resource: 'products' },
 *             { action: 'export', resource: 'products' },
 *             // actions 'create' and 'delete' are missing
 *             { action: 'read', resource: 'products.name' },
 *             { action: 'read', resource: 'products.description' },
 *             { action: 'read', resource: 'products.price' },
 *             { action: 'read', resource: 'products.category' },
 *             // resource 'products.stock' is missing
 *         ]),
 * };
 *
 * export const PostList = () => (
 *     <List>
 *         ...
 *     </List>
 * );
 * // Users will see the Export action on top of the list, but not the Create action.
 * // Users will only see the authorized columns when clicking on the export button.
 */
export const List = (props: ListProps & { children: ReactElement }) => {
    const resource = useResourceContext(props);
    const { isLoading, permissions } = usePermissions();
    if (isLoading) {
        return null;
    }
    const defaultExporter = records => {
        const recordsWithAuthorizedColumns = records.map(record =>
            Object.keys(record)
                .filter(key =>
                    canAccess({
                        permissions,
                        action: 'read',
                        resource: `${resource}.${key}`,
                    })
                )
                .reduce((obj, key) => ({ ...obj, [key]: record[key] }), {})
        );
        jsonExport(recordsWithAuthorizedColumns, (err, csv) =>
            downloadCSV(csv, resource)
        );
    };
    const exporter =
        props.exporter === false ? false : props.exporter ?? defaultExporter;
    return (
        <RaList
            actions={<ListActions exporter={exporter} />}
            exporter={exporter}
            {...props}
        />
    );
};

List.propTypes = RaList.propTypes;
