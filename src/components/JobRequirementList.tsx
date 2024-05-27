import { TextField } from 'react-admin';
import { List } from '../rbac/list/List';
import { IfCanAccess } from '../rbac/IfCanAccess';
import { CustomDatagrid as Datagrid } from './CustomDatagrid';
import { JobApplicationsCountField } from './JobApplicationsCountField';

export const JobRequirementList = () => {
    return (
        <List>
            <Datagrid rowClick="show">
                <TextField source="id" label="Job ID" />
                <TextField source="department" label="Department" />
                <TextField source="rank" label="Rank" />
                <TextField source="title" label="Title" />
                <JobApplicationsCountField label="Number of Applications" />
            </Datagrid>
        </List>
    );
};
