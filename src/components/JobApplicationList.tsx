import { TextField, ReferenceField } from 'react-admin';
import { List } from '../rbac/list/List';
import { CustomDatagrid as Datagrid } from './CustomDatagrid';
import { JobRequirementLinkField } from './JobRequirementLinkField';

export const JobApplicationList = () => (
    <List>
        <Datagrid rowClick="show">
            <JobRequirementLinkField source="jobRequirementID" label="Job ID" />
            <ReferenceField source="jobRequirementID" reference="JobRequirements" label="Department">
                <TextField source="department" />
            </ReferenceField>
            <ReferenceField source="jobRequirementID" reference="JobRequirements" label="Rank">
                <TextField source="rank" />
            </ReferenceField>
            <ReferenceField source="jobRequirementID" reference="JobRequirements" label="Title">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField source="applicantID" reference="Applicants" label="Name">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="applicantID" reference="Applicants" label="Email">
                <TextField source="email" />
            </ReferenceField>
            <TextField source="status" label="Status" />
        </Datagrid>
    </List>
);
