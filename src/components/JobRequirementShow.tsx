import { useState } from 'react';
import { useDataProvider, useNotify, TextField, RichTextField, Button, DeleteButton, Labeled } from 'react-admin';
import { Show } from '../rbac/detail/Show';
import { SimpleShowLayout } from '../rbac/detail/SimpleShowLayout';
import { IfCanAccess } from '../rbac/IfCanAccess';
import ApplyDialog from './ApplyDialog';
import { useParams } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface Applicant {
    id: string;
    email: string;
    name: string;
    resume: string;
    contactInformation: string;
}

const isErrorWithMessage = (error: unknown): error is { message: string } => {
    return typeof error === 'object' && error !== null && 'message' in error;
};

export const JobRequirementShow = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const { id: jobRequirementID } = useParams<{ id: string }>();
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    const handleApply = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleApplicationSubmit = async (applicant: Applicant) => {
        try {
            const jobApplicationData = {
                applicantID: applicant.id,
                jobRequirementID,
                applicationNumber: `APP-${Date.now()}`,
                status: 'Application Submitted',
                passcode: `PASS-${Math.random().toString(36).substr(2, 9)}`
            };
            const response = await dataProvider.create('jobApplications', { data: jobApplicationData });
            const { applicationNumber, passcode } = response.data;

            notify(`Application submitted successfully. Application Number: ${applicationNumber}, Passcode: ${passcode}`);
            setDialogOpen(false);
        } catch (error: unknown) {
            if (isErrorWithMessage(error)) {
                notify(`Error submitting application: ${error.message}`, { type: 'warning' });
            } else {
                notify('Error submitting application', { type: 'warning' });
            }
        }
    };

    return (
        <Show>
            <SimpleShowLayout>
                <Box display="flex" flexDirection={isSmall ? 'column' : 'row'} width="100%">
                    <Box width={isSmall ? '100%' : '30%'} marginRight={isSmall ? 0 : 2} display="flex" flexDirection="column" justifyContent="space-between" height="300px">
                        <Labeled label="Department">
                            <TextField source="department" />
                        </Labeled>
                        <Labeled label="Rank">
                            <TextField source="rank" />
                        </Labeled>
                        <Labeled label="Title">
                            <TextField source="title" />
                        </Labeled>
                    </Box>
                    <Box flex={1} display="flex" flexDirection="column">
                        <Labeled label="Description">
                            <RichTextField source="description" />
                        </Labeled>
                    </Box>
                </Box>
                <IfCanAccess action="delete" resource="jobRequirements">
                    <DeleteButton />
                </IfCanAccess>
                <IfCanAccess action="apply" resource="jobRequirements">
                    <Button label="Apply" onClick={handleApply} />
                </IfCanAccess>
                <ApplyDialog
                    open={dialogOpen}
                    onClose={handleDialogClose}
                    onApply={handleApplicationSubmit}
                />
            </SimpleShowLayout>
        </Show>
    );
};
