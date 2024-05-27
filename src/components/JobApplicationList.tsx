import { useEffect, useState } from 'react';
import { SelectInput, useDataProvider } from 'react-admin';
import { List } from '../rbac/list/List';
import { JobApplicationDashboard } from './JobApplicationDashboard';

interface JobRequirement {
    id: number;
    title: string;
}

export const JobApplicationList = () => {
    const dataProvider = useDataProvider();
    const [jobRequirements, setJobRequirements] = useState<JobRequirement[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobRequirements = async () => {
            try {
                const { data } = await dataProvider.getList('jobRequirements', {
                    filter: {}, sort: { field: 'id', order: 'ASC' }, pagination: { page: 1, perPage: 100 },
                });
                setJobRequirements(data);
            } catch (error) {
                setError('Failed to fetch job requirements.');
            }
        };
        fetchJobRequirements();
    }, [dataProvider]);

    const filters = [
        <SelectInput
            key="jobRequirement" alwaysOn resettable label="Job Requirement"
            source="applicationsByJobRequirement.jobRequirementID"
            choices={jobRequirements.map(({ id, title }) => ({ id, name: `${id} - ${title}` }))} />
    ];

    if (error) return <div>{error}</div>;
    return <List filters={filters}><JobApplicationDashboard /></List>;
};
