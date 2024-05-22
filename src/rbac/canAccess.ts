import isMatch from 'lodash/isMatch';

import { Permission, Permissions } from './types';

/**
 * Checks if an array of permissions allows to execute the given action on the given resource.
 *
 * @example
 * canAccess({
 *     permissions: [
 *         { resource: 'user', action: 'read' },
 *         { resource: 'posts', action: ['read', 'edit', 'create', 'delete'] },
 *     ],
 *     action: "edit",
 *     resource: "posts"
 * }); // true
 */
export const canAccess = ({
    permissions,
    action,
    resource,
    record,
}: {
    permissions: Permissions;
    action?: string;
    resource: string;
    record?: any;
}): boolean => {
    if (!permissions || permissions.length === 0) {
        // permissions can be undefined while loading
        return false;
    }
    // if one deny permission matches, return false
    for (const permission of permissions.filter(
        p => p != null && p.type === 'deny'
    )) {
        if (matchTarget(permission, resource, action, record)) {
            return false;
        }
    }
    // if one allow permission matches, return true
    for (const permission of permissions.filter(
        p => p != null && p.type !== 'deny'
    )) {
        if (matchTarget(permission, resource, action, record)) {
            return true;
        }
    }
    return false;
};

/**
 * Checks is a permission matches a target (action, resource, record)
 *
 * @example
 * matchTarget({ resource: 'user', action: 'read' }, 'user', 'read'); // true
 * matchTarget({ resource: 'user', action: 'read' }, 'user', 'edit'); // false
 */
const matchTarget = (
    permission: Permission,
    resource: string,
    action?: string,
    record?: any
) => {
    if (permission == null) {
        return false;
    }
    if (Array.isArray(permission.resource)) {
        if (!permission.resource.some(r => matchWildcard(r, resource))) {
            return false;
        }
    } else if (!matchWildcard(permission.resource, resource)) {
        return false;
    }
    if (action == null || action === '*') {
        return true;
    }
    if (
        Array.isArray(permission.action) &&
        !permission.action.includes(action)
    ) {
        return false;
    }
    if (
        typeof permission.action === 'string' &&
        permission.action !== '*' &&
        permission.action !== action
    ) {
        return false;
    }
    if (permission.record && record) {
        if (!isMatch(record, permission.record)) {
            return false;
        }
    }
    return true;
};

/**
 * Checks if a permission matches a wildcard.
 *
 * @param permission The permission to check, e.g. 'posts.*'
 * @param resource The resource to check, e.g. 'posts'
 *
 * @example
 * matchWildCard('*', 'posts'); // true
 * matchWildCard('posts', 'posts'); // true
 * matchWildcard('posts.*', 'posts'); // true
 * matchWildcard('comments', 'posts'); // false
 */
const matchWildcard = (pattern: string, resource: string) => {
    if (pattern === '*') {
        return true;
    }
    if (pattern === resource) {
        return true;
    }
    if (pattern.endsWith('*')) {
        return resource.startsWith(pattern.slice(0, -1));
    }
    return false;
};
