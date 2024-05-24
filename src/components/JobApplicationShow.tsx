import { TextField, ReferenceField } from 'react-admin';
import { Show } from '../rbac/detail/Show';
import { SimpleShowLayout } from '../rbac/detail/SimpleShowLayout';
import { JobRequirementLinkField } from './JobRequirementLinkField';

export const JobApplicationShow = () => (
    <Show>
        <SimpleShowLayout>
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
        </SimpleShowLayout>
    </Show>
);
