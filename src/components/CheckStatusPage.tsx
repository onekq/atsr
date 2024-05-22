import React, { useState } from 'react';
import { useDataProvider, ReferenceField, TextField as RaTextField } from 'react-admin';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

export const CheckStatusPage: React.FC = () => {
    const [applicationNumber, setApplicationNumber] = useState('');
    const [passcode, setPasscode] = useState('');
    const [application, setApplication] = useState(null);
    const [error, setError] = useState('');

    const dataProvider = useDataProvider();

    const handleCheckStatus = async () => {
        try {
            const { data } = await dataProvider.getList('jobApplications', {
                filter: { applicationsByApplicationNumber: { applicationNumber } },
                pagination: { page: 1, perPage: 1 },
                sort: { field: 'id', order: 'ASC' }
            });

            if (data.length > 0) {
                const retrievedApplication = data[0];
                if (retrievedApplication.passcode === passcode) {
                    setApplication(retrievedApplication);
                    setError('');
                } else {
                    setError('Invalid application number or passcode.');
                    setApplication(null);
                }
            } else {
                setError('Invalid application number or passcode.');
                setApplication(null);
            }
        } catch (err) {
            setError('An error occurred while checking status.');
            setApplication(null);
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Check Application Status</Typography>
                <TextField
                    label="Application Number"
                    value={applicationNumber}
                    onChange={(e) => setApplicationNumber(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Passcode"
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleCheckStatus}>
                    Check Status
                </Button>
                {error && <Typography color="error">{error}</Typography>}
                {application && (
                    <div>
                        <Typography variant="h6">Application Details:</Typography>
                        <Typography>Application Number: {application.applicationNumber}</Typography>
                        <Typography>Status: {application.status}</Typography>
                        <Typography>Passcode: {application.passcode}</Typography>
                        <ReferenceField
                            label="Job Requirement"
                            source="jobRequirementID"
                            reference="jobRequirements"
                            record={application}
                        >
                            <RaTextField source="department" />
                            <RaTextField source="function" />
                            <RaTextField source="rank" />
                            <RaTextField source="description" />
                        </ReferenceField>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
