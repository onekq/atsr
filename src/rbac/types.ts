export interface Permission {
    /**
     * @default 'allow'
     */
    type?: 'allow' | 'deny';
    action: string | string[];
    resource: string | string[];
    record?: any;
}

export type Permissions = Permission[];
export type Roles = string[];

export interface GetPermissionsResult {
    permissions: Permissions;
    roles?: Roles;
}

export interface GetRolesResult {
    [role: string]: Permission[];
}

export type RoleDefinitions = Record<string, Permissions>;
