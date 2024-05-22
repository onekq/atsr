import * as React from 'react';
import { createElement } from 'react';
import PropTypes from 'prop-types';
import lodashGet from 'lodash/get';
import {
    CLOSED_DRAWER_WIDTH,
    DashboardMenuItem,
    DRAWER_WIDTH,
    MenuItemLink as RaMenuItemLink,
    MenuProps,
    useCreatePath,
    useGetResourceLabel,
    usePermissions,
    useResourceDefinitions,
    useSidebarState,
} from 'react-admin';
import { styled } from '@mui/material/styles';
import DefaultIcon from '@mui/icons-material/ViewList';
import clsx from 'clsx';

import { canAccess } from './canAccess';
import { MenuItemLink } from './MenuItemLink';

export const MENU_WIDTH = 240;
export const CLOSED_MENU_WIDTH = 55;

/**
 * A replacement for react-admin's `<Menu>` component, which only displays
 * the menu items that the current user has access to (using the `list` action).
 *
 * Pass this menu to a `<Layout>`, and pass that layout to the `<Admin>` component to use it.
 *
 * @example
 * import { Admin, Resource, ListGuesser, Layout, LayoutProps } from 'react-admin';
 * import { Menu } from '@react-admin/ra-rbac';
 *
 * import * as posts from './posts';
 * import * as comments from './comments';
 * import * as users from './users';
 *
 * const authProvider= {
 *     // ...
 *     getPermissions: () => Promise.resolve([
 *         { "action": "*", "resource": "posts" },
 *         { "action": "*", "resource": "comments" },
 *     ]),
 * };
 *
 * const CustomLayout = (props: LayoutProps) => <Layout {...props} menu={Menu} />;
 *
 * const App = () => (
 *     <Admin dataProvider={...} authProvider={...} layout={CustomLayout}>
 *         <Resource name="posts" {...posts} />
 *         <Resource name="comments" {...comments} />
 *         <Resource name="users" {...users} />
 *     </Admin>
 * ); // the user won't see the Users menu
 */
export const Menu = (props: MenuProps) => {
    const resources = useResourceDefinitions();
    const getResourceLabel = useGetResourceLabel();
    const createPath = useCreatePath();
    const [open] = useSidebarState();
    const { isLoading, permissions } = usePermissions();
    if (isLoading) {
        return null;
    }
    const {
        hasDashboard,
        dense,
        children = (
            <>
                {hasDashboard && <DashboardMenuItem dense={dense} />}
                {Object.keys(resources)
                    .filter(name => resources[name].hasList)
                    .filter(name =>
                        canAccess({
                            permissions,
                            action: 'list',
                            resource: name,
                        })
                    )
                    .map(name => (
                        //@ts-ignore
                        <RaMenuItemLink
                            key={name}
                            to={createPath({
                                resource: name,
                                type: 'list',
                            })}
                            state={{ _scrollToTop: true }}
                            primaryText={getResourceLabel(name, 2)}
                            leftIcon={
                                resources[name].icon ? (
                                    createElement(resources[name].icon)
                                ) : (
                                    <DefaultIcon />
                                )
                            }
                            dense={dense}
                        />
                    ))}
            </>
        ),
        className,
        ...rest
    } = props;

    return (
        <Root
            className={clsx(
                {
                    [MenuClasses.open]: open,
                    [MenuClasses.closed]: !open,
                },
                className
            )}
            {...rest}
        >
            {children}
        </Root>
    );
};

Menu.propTypes = {
    className: PropTypes.string,
    dense: PropTypes.bool,
    hasDashboard: PropTypes.bool,
};

// re-export MenuItem commponents for convenience
Menu.Item = MenuItemLink;
Menu.DashboardItem = DashboardMenuItem;

const PREFIX = 'RaMenu';

export const MenuClasses = {
    open: `${PREFIX}-open`,
    closed: `${PREFIX}-closed`,
};

const Root = styled('div', {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '0.5em',
    marginBottom: '1em',
    [theme.breakpoints.only('xs')]: {
        marginTop: 0,
    },
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),

    [`&.${MenuClasses.open}`]: {
        width: lodashGet(theme, 'sidebar.width', DRAWER_WIDTH),
    },

    [`&.${MenuClasses.closed}`]: {
        width: lodashGet(theme, 'sidebar.closedWidth', CLOSED_DRAWER_WIDTH),
    },
}));
