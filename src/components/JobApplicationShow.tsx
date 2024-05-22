import { TextField, ReferenceField } from 'react-admin';
import { Show } from '../rbac/detail/Show';
import { SimpleShowLayout } from '../rbac/detail/SimpleShowLayout';

export const JobApplicationShow = () => (
    <Show>
        <SimpleShowLayout>
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
        </SimpleShowLayout>
    </Show>
);
