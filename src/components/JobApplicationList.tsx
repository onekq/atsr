import { TextField, ShowButton, ReferenceField } from 'react-admin';
import { List } from '../rbac/list/List';
import { CustomDatagrid as Datagrid} from './CustomDatagrid';

export const JobApplicationList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="applicantID" reference="Applicants" label="Name">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="applicantID" reference="Applicants" label="Email">
                <TextField source="email" />
            </ReferenceField>
            <ReferenceField source="jobRequirementID" reference="JobRequirements" label="Department">
                <TextField source="department" />
            </ReferenceField>
            <ReferenceField source="jobRequirementID" reference="JobRequirements" label="Rank">
                <TextField source="rank" />
            </ReferenceField>
            <ReferenceField source="jobRequirementID" reference="JobRequirements" label="Title">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="applicationNumber" />
            <TextField source="status" />
            <TextField source="passcode" />
            <ShowButton />
        </Datagrid>
    </List>
);
