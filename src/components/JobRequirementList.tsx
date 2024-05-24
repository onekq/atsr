import { TextField, ShowButton } from 'react-admin';
import { List } from '../rbac/list/List';
import { CustomDatagrid as Datagrid} from './CustomDatagrid';

export const JobRequirementList = () =>
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" label="Job ID" />
            <TextField source="department" label="Department" />
            <TextField source="rank" label="Rank" />
            <TextField source="title" label="Title" />
        </Datagrid>
    </List>;
