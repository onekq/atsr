import React from 'react';
import { Create, SimpleForm, SelectInput, TextInput, required } from 'react-admin';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { MyRichTextInput } from './MyRichTextInput';
import { departmentChoices, rankChoices } from './choices';

export const JobRequirementCreate = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Create>
            <SimpleForm>
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
