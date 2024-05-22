import { TextField, ShowButton, ReferenceField } from 'react-admin';
import { List } from '../rbac/list/List';
import { Datagrid } from '../rbac/list/Datagrid';

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
            <ReferenceField source="jobRequirementID" reference="JobRequirements" label="Function">
                <TextField source="function" />
            </ReferenceField>
            <TextField source="applicationNumber" />
            <TextField source="status" />
            <TextField source="passcode" />
            <ShowButton />
        </Datagrid>
    </List>
);
