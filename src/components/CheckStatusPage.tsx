import React, { useState } from 'react';
import { useDataProvider, ReferenceField, TextField as RaTextField } from 'react-admin';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

export const CheckStatusPage: React.FC = () => {
    const [applicationId, setApplicationId] = useState('');
    const [passcode, setPasscode] = useState('');
    const [application, setApplication] = useState(null);
    const [error, setError] = useState('');

    const dataProvider = useDataProvider();

    const handleCheckStatus = async () => {
        try {
            const { data } = await dataProvider.getOne('jobApplications', { id: applicationId });

            if (data) {
                if (data.passcode === passcode) {
                    setApplication(data);
                    setError('');
                } else {
                    setError('Invalid application ID or passcode.');
                    setApplication(null);
                }
            } else {
                setError('Invalid application ID or passcode.');
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
                <Typography variant="h5" gutterBottom>Check Application Status</Typography>
                <TextField label="Application ID" value={applicationId} onChange={(e) => setApplicationId(e.target.value)} fullWidth margin="normal" />
                <TextField label="Passcode" type="password" value={passcode} onChange={(e) => setPasscode(e.target.value)} fullWidth margin="normal" />
                <Button variant="contained" color="primary" onClick={handleCheckStatus} fullWidth style={{ marginTop: 16 }}>Check Status</Button>
                {error && <Typography color="error" style={{ marginTop: 16 }}>{error}</Typography>}
                {application && (
                    <div style={{ marginTop: 16 }}>
                        <Typography variant="h6">Application Details:</Typography>
                        <Typography>Application ID: {application.id}</Typography>
                        <Typography>Status: {application.status}</Typography>
                        <Typography>Passcode: {application.passcode}</Typography>
                        <ReferenceField label="Job Requirement" source="jobRequirementID" reference="jobRequirements" record={application}>
                            <RaTextField source="department" />
                            <RaTextField source="function" />
                            <RaTextField source="rank" />
                        </ReferenceField>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
