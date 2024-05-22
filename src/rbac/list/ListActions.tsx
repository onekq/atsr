import * as React from 'react';
import { cloneElement, useMemo, useContext } from 'react';

import {
    CreateButton,
    ExportButton,
    FilterButton,
    FilterContext,
    ListActions as RaListActions,
    ListActionsProps,
    sanitizeListRestProps,
    TopToolbar,
    useListContext,
    usePermissions,
    useResourceContext,
    useResourceDefinition,
} from 'react-admin';

import { canAccess } from '../canAccess';

/**
 * Replacement for react-admin's ListAction that adds RBAC control to actions
 *
 * Users must have the 'create' permission on the resource to see the CreateButton.
 * Users must have the 'export' permission on the resource to see the ExportButton.
 *
 * @example
 * import { List } from 'react-admin';
 * import { ListActions } from '@react-admin/ra-rbac';
 *
 * export const PostList = () => (
 *     <List actions={<ListActions />}>
 *         ...
 *     </List>
 * );
 */
export const ListActions = (props: ListActionsProps) => {
    const {
        className,
        hasCreate: injectedHasCreate,
        exporter,
        filters: filtersProp,
        ...rest
    } = props;
    const { displayedFilters, filterValues, showFilter, total } =
        useListContext(props);
    const resource = useResourceContext(props);
    const { hasCreate } = useResourceDefinition(props);
    const filters = useContext(FilterContext) || filtersProp;
    const { isLoading, permissions } = usePermissions();
    return useMemo(
        () =>
            isLoading ? null : (
                <TopToolbar
                    className={className}
                    {...sanitizeListRestProps(rest)}
                >
                    {filtersProp
                        ? cloneElement(filtersProp, {
                              resource,
                              showFilter,
                              displayedFilters,
                              filterValues,
                              context: 'button',
                          })
                        : filters && <FilterButton />}
                    {hasCreate &&
                        canAccess({
                            action: 'create',
                            resource,
                            permissions,
                        }) && <CreateButton />}
                    {exporter !== false &&
                        canAccess({
                            action: 'export',
                            resource,
                            permissions,
                        }) && <ExportButton />}
                </TopToolbar>
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [resource, displayedFilters, filterValues, filters, total, isLoading]
    );
};

ListActions.propTypes = RaListActions.propTypes;
