import { useRecordContext, useDataProvider } from 'react-admin';
import { useEffect, useState } from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FC, MouseEvent } from 'react';

interface JobApplicationsCountFieldProps {
    label: string;
}

export const JobApplicationsCountField: FC<JobApplicationsCountFieldProps> = () => {
    const record = useRecordContext();
    const dataProvider = useDataProvider();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (record) {
                try {
                    const { data } = await dataProvider.getList('JobApplication', {
                        filter: { applicationsByJobRequirement: { jobRequirementID: record.id } },
                        pagination: { page: 1, perPage: 1000 },
                        sort: { field: 'id', order: 'ASC' },
                    });
                    setCount(data.length);
                } catch (error) {
                    console.error('Error fetching job applications:', error);
                }
            }
        };

        fetchData();
    }, [record, dataProvider]);

    const handleClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    if (!record) return null;

    const jobApplicationsUrl = `/jobApplications?displayedFilters=%7B%7D&filter=%7B%22applicationsByJobRequirement%22%3A%7B%22jobRequirementID%22%3A%22${record.id}%22%7D%7D&order=ASC&page=1&perPage=10&sort=id`;

    return (
        <Link component={RouterLink} to={jobApplicationsUrl} onClick={handleClick} target="_blank" rel="noopener">{count}</Link>
    );
};
