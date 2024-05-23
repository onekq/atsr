import * as React from 'react';
import { DatagridProps, Datagrid, RaRecord } from 'react-admin';
import { TableHead, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomDatagridProps<RecordType extends RaRecord = any> extends DatagridProps<RecordType> {
    hasBulkActions?: boolean;
}

const CustomHeaderCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold',
    backgroundColor: '#000', // Black background color
    color: '#fff', // White text color
}));

const CustomDatagridHeader: React.FC<CustomDatagridProps> = ({ children, hasBulkActions }) => (
    <TableHead>
        <TableRow>
            {hasBulkActions && <CustomHeaderCell />}
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? (
                    <CustomHeaderCell key={child.props.source}>{child.props.label || child.props.source}</CustomHeaderCell>
                ) : null
            )}
        </TableRow>
    </TableHead>
);

export const CustomDatagrid: React.FC<CustomDatagridProps> = (props) => (
    <Datagrid {...props} header={<CustomDatagridHeader hasBulkActions={props.hasBulkActions} />}>{props.children}</Datagrid>
);
