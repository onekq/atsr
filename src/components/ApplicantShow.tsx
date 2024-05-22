import React from 'react';
import { TextField } from 'react-admin';
import { Show } from '../rbac/detail/Show';
import { SimpleShowLayout } from '../rbac/detail/SimpleShowLayout';

export const ApplicantShow: React.FC = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="email" />
            <TextField source="name" />
            <TextField source="resume" />
            <TextField source="contactInformation" />
        </SimpleShowLayout>
    </Show>
);
