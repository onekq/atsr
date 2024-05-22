import * as React from 'react';

import {
    usePermissions,
    MenuItemLink as RaMenuItemLink,
    MenuItemLinkProps as RaMenuItemLinkProps,
} from 'react-admin';

import { canAccess } from './canAccess';

export const MenuItemLink = React.forwardRef<any, MenuItemLinkProps>(
    function MenuItemLink(props, ref) {
        const { isLoading, permissions } = usePermissions();
        const { action, resource, ...rest } = props;
        if (action != null && resource != null) {
            // this menu uses rbac
            if (isLoading) {
                return null;
            }
            if (
                !canAccess({
                    permissions,
                    action,
                    resource,
                })
            ) {
                return null;
            }
        }
        //@ts-ignore
        return <RaMenuItemLink ref={ref} {...rest} />;
    }
);

export type MenuItemLinkProps = Omit<RaMenuItemLinkProps, 'action'> & {
    action?: string;
    resource?: string;
};
