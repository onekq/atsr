import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin';

const departmentChoices = [
    { id: 'Admin', name: 'Admin' },
    { id: 'Sales and Marketing', name: 'Sales and Marketing' },
    { id: 'Customer Success and Support', name: 'Customer Success and Support' },
    { id: 'Fulfillment and Operations', name: 'Fulfillment and Operations' },
    { id: 'Finance and Accounting', name: 'Finance and Accounting' },
    { id: 'Legal and HR', name: 'Legal and HR' },
];

const functionChoices = [
    { id: 'Intern', name: 'Intern' },
    { id: 'Associate/Junior', name: 'Associate/Junior' },
    { id: 'Senior Individual', name: 'Senior Individual' },
    { id: 'Manager', name: 'Manager' },
    { id: 'Senior Manager/Director', name: 'Senior Manager/Director' },
    { id: 'VP', name: 'VP' },
    { id: 'C-level', name: 'C-level' },
];

export const JobRequirementCreate = () => (
    <Create>
        <SimpleForm>
            <SelectInput source="department" choices={departmentChoices} optionText="name" optionValue="id" />
            <SelectInput source="function" choices={functionChoices} optionText="name" optionValue="id" />
            <TextInput source="rank" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);
