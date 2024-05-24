import React from 'react';
import { Create, SimpleForm, SelectInput, TextInput, required, useDataProvider, useNotify, useRedirect, useCreate } from 'react-admin';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { MyRichTextInput } from './MyRichTextInput';
import { departmentChoices, rankChoices } from './choices';

const generateUniqueId = (existingIds) => {
    const allIds = new Set(Array.from({ length: 9999 - 1000 + 1 }, (_, i) => 1001 + i));
    const availableIds = Array.from(new Set([...allIds].filter(id => !existingIds.includes(id))));

    if (availableIds.length === 0) {
        throw new Error('No available IDs');
    }

    return availableIds[Math.floor(Math.random() * availableIds.length)];
};

export const JobRequirementCreate = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const redirect = useRedirect();
    const [create] = useCreate();

    const handleSave = async (data) => {
        try {
            const { data: jobRequirements } = await dataProvider.getList('jobRequirements', {
                filter: {},
                sort: { field: 'id', order: 'ASC' },
                pagination: { page: 1, perPage: 1000 },
            });
            const existingIds = jobRequirements.map(item => parseInt(item.id, 10));
            const newId = generateUniqueId(existingIds);

            data.id = newId.toString();

            await create('jobRequirements', { data });
            notify('Job Requirement created successfully', { type: 'info' });
            redirect('list', 'jobRequirements');
        } catch (error) {
            notify(`Error: ${error}`, { type: 'warning' });
        }
    };

    return (
        <Create>
            <SimpleForm onSubmit={handleSave}>
                <Box display="flex" flexDirection={isSmall ? 'column' : 'row'} width="100%">
                    <Box width={isSmall ? '100%' : '30%'} marginRight={isSmall ? 0 : 2} display="flex" flexDirection="column" justifyContent="space-between" height="300px">
                        <SelectInput source="department" choices={departmentChoices} optionText="name" optionValue="id" validate={required()} fullWidth />
                        <SelectInput source="rank" choices={rankChoices} optionText="name" optionValue="id" validate={required()} fullWidth />
                        <TextInput source="title" validate={required()} fullWidth />
                    </Box>
                    <Box flex={1} display="flex" flexDirection="column">
                        <MyRichTextInput source="description" validate={required()} fullWidth />
                    </Box>
                </Box>
            </SimpleForm>
        </Create>
    );
};
