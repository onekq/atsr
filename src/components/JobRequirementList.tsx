import { TextField } from 'react-admin';
import { List } from '../rbac/list/List';
import { Datagrid } from '../rbac/list/Datagrid';

export const JobRequirementList = () =>
    <List>
        <Datagrid rowClick="show">
            <TextField source="department"/>
            <TextField source="function" />
            <TextField source="rank" />
            <TextField source="description" />
        </Datagrid>
    </List>;
