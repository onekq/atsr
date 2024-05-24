import { useRecordContext } from 'react-admin';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FC, MouseEvent } from 'react';

interface JobRequirementLinkFieldProps {
    source: string;
    label: string;
}

export const JobRequirementLinkField: FC<JobRequirementLinkFieldProps> = ({ source }) => {
    const record = useRecordContext();

    const handleClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    return record ? (
        <Link component={RouterLink} to={`/JobRequirements/${record[source]}/show`} onClick={handleClick} target="_blank" rel="noopener">
            {record[source]}
        </Link>
    ) : null;
};
