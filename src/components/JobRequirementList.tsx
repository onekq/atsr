import { TextField } from 'react-admin';
import { List } from '../rbac/list/List';
import { CustomDatagrid as Datagrid} from './CustomDatagrid';

export const JobRequirementList = () =>
    <List>
        <Datagrid rowClick="show">
            <TextField source="department"/>
            <TextField source="rank" />
            <TextField source="title" />
        </Datagrid>
    </List>;
