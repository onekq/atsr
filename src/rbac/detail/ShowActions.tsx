import * as React from 'react';
import {
    EditButton,
    ShowActions as RaShowActions,
    ShowActionsProps,
    TopToolbar,
    usePermissions,
    useResourceContext,
    useResourceDefinition,
    useRecordContext,
} from 'react-admin';

import { canAccess } from '../canAccess';

/**
 * Replacement for react-admin's ShowAction that adds RBAC control to actions
 *
 * Users must have the 'edit' permission on the resource and record to see the EditButton.
 *
 * @example
 * import { Show } from 'react-admin';
 * import { ShowActions } from '@react-admin/ra-rbac';
 *
 * export const PostShow = () => (
 *     <Show actions={<ShowActions />}>
 *         ...
 *     </Show>
 * );
 */
export const ShowActions = (props: ShowActionsProps) => {
    const { className } = props;
    const record = useRecordContext(props);
    const { hasEdit } = useResourceDefinition();
    const resource = useResourceContext();
    const { isLoading, permissions } = usePermissions();
    if (isLoading) {
        return null;
    }
    return (
        <TopToolbar className={className} {...sanitizeRestProps(props)}>
            {hasEdit &&
                canAccess({
                    permissions,
                    action: 'edit',
                    resource,
                    record,
                }) && <EditButton />}
        </TopToolbar>
    );
};

ShowActions.propTypes = RaShowActions.propTypes;

const sanitizeRestProps = ({
    basePath,
    defaultTitle,
    className,
    hasCreate,
    hasEdit,
    hasList,
    hasShow,
    isFetching,
    isLoading,
    refetch,
    record,
    resource,
    ...rest
}: any) => rest;
