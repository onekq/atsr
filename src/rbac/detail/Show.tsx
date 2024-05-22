import * as React from 'react';
import { ReactElement } from 'react';
import {
    Show as RaShow,
    ShowBase,
    ShowView as RaShowView,
    ShowProps as RaShowProps,
    useResourceContext,
    useRecordContext,
    usePermissions,
    useTranslate,
} from 'react-admin';
import { Button, Box } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import History from '@mui/icons-material/History';
import { canAccess } from '../canAccess';
import { ShowActions } from './ShowActions';

/**
 * Replacement for react-admin's Show that adds RBAC control to actions
 *
 * Users must have the 'show' permission on the resource and record to see the Show view.
 * Users must have the 'edit' permission on the resource and record to see the EditButton.
 *
 * @example
 * import { Show } from '@react-admin/ra-rbac';
 *
 * const authProvider = {
 *      // ...
 *      getPermissions: () => Promise.resolve([
 *          { action: ['list', 'show', 'edit'], resource: 'products' },
 *       ]),
 * };
 *
 * export const PostShow = () => (
 *     <Show>
 *         ...
 *     </Show>
 * );
 * // user will see the following actions on top of the Show:
 * // - edit
 */
export const Show = ({
    id,
    resource,
    queryOptions,
    disableAuthentication,
    ...rest
}: ShowProps) => {
    return (
        <ShowBase
            id={id}
            disableAuthentication={disableAuthentication}
            queryOptions={queryOptions}
            resource={resource}
        >
            <ShowView actions={<ShowActions />} {...rest} />
        </ShowBase>
    );
};

interface ShowProps extends RaShowProps {
    unauthorized?: ReactElement;
}

Show.propTypes = RaShow.propTypes;

const ShowView = (
    props: Parameters<typeof RaShowView>[0] & {
        unauthorized?: ReactElement;
    }
) => {
    const resource = useResourceContext();
    const record = useRecordContext();
    const { isLoading, permissions } = usePermissions();
    if (isLoading) {
        return null;
    }
    if (
        !canAccess({
            permissions,
            action: 'show',
            resource,
            record,
        })
    ) {
        return props.unauthorized ?? <DefaultUnauthorizedView />;
    }
    return <RaShowView {...props} />;
};

const DefaultUnauthorizedView = () => {
    const translate = useTranslate();
    return (
        <Box
            sx={theme => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                [theme.breakpoints.down('md')]: {
                    padding: '1em',
                },
                fontFamily: 'Roboto, sans-serif',
                opacity: 0.5,
                '& h1': {
                    display: 'flex',
                    alignItems: 'center',
                },
            })}
        >
            <h1 role="alert">
                <LockIcon
                    sx={{
                        width: '2em',
                        height: '2em',
                        marginRight: '0.5em',
                    }}
                />
                {translate('ra-rbac.page.unauthorized')}
            </h1>
            <div>{translate('ra-rbac.message.unauthorized')}</div>
            <Box
                sx={{
                    marginTop: '2em',
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<History />}
                    onClick={goBack}
                >
                    {translate('ra.action.back')}
                </Button>
            </Box>
        </Box>
    );
};

function goBack() {
    window.history.go(-1);
}
