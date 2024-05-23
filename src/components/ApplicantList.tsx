import React from 'react';
import { TextField, ShowButton } from 'react-admin';
import { List } from '../rbac/list/List';
import { CustomDatagrid as Datagrid} from './CustomDatagrid';

export const ApplicantList: React.FC = () =>
    <List>
        <Datagrid>
            <TextField source="email" />
            <TextField source="name" />
            <TextField source="resume" />
            <TextField source="contactInformation" />
            <ShowButton />
        </Datagrid>
    </List>;