import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDataProvider } from 'react-admin';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { fetchUserAttributes } from '@aws-amplify/auth';

interface Applicant {
    id: string;
    email: string;
    name: string;
    resume: string;
    contactInformation: string;
}

interface ApplyDialogProps {
    open: boolean;
    onClose: () => void;
    onApply: (applicant: Applicant) => void;
}

const ApplyDialog: React.FC<ApplyDialogProps> = ({ open, onClose, onApply }) => {
    const [applicant, setApplicant] = useState<Applicant>({ id: '', email: '', name: '', resume: '', contactInformation: '' });
    const [isExistingApplicant, setIsExistingApplicant] = useState(false);
    const dataProvider = useDataProvider();

    useEffect(() => {
        const fetchCurrentUserEmail = async () => {
            try {
                const userAttributes = await fetchUserAttributes();
                const email = userAttributes.email;
                const id = userAttributes.sub;
                setApplicant(prev => ({ ...prev, id, email }));

                const { data } = await dataProvider.getOne('applicants', { id });
                setApplicant(data);
                setIsExistingApplicant(true);
            } catch (error) {
                setIsExistingApplicant(false);
            }
        };

        fetchCurrentUserEmail();
    }, [dataProvider]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setApplicant((prevApplicant) => ({ ...prevApplicant, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            if (isExistingApplicant) {
                await dataProvider.update('applicants', { id: applicant.id, data: applicant, previousData: applicant });
            } else {
                const response = await dataProvider.create('applicants', { data: applicant });
                if (response && response.data) {
                    setApplicant(response.data);
                }
            }
            onApply(applicant);
        } catch (error) {
            console.error("Error saving applicant: ", error);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Apply for Job</DialogTitle>
            <DialogContent>
                <TextField
                    label="Name"
                    name="name"
                    value={applicant.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Resume"
                    name="resume"
                    value={applicant.resume}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Contact Information"
                    name="contactInformation"
                    value={applicant.contactInformation}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Apply</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ApplyDialog;
