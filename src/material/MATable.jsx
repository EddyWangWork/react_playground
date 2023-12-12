import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import { Box, Stack } from '@mui/material';
import moment from 'moment';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        amount: 100,
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
        joindate: '2023-01-01'
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        amount: 150,
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Kentucky',
        joindate: '2023-01-02'
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        amount: 150,
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
        joindate: '2023-02-01'
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        amount: 150,
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
        joindate: '2023-02-02'
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        amount: 150,
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'Nebraska',
        joindate: '2023-03-01'
    },
];

const selectOp = ['Joshua', 'Kevin']

const MATable = () => {
    const sumAmount = useMemo(
        () => data.reduce((acc, curr) => acc + curr.amount, 0),
        [],
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
                size: 150,
                filterVariant: 'multi-select',
                filterSelectOptions: selectOp
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
                size: 150,
            },
            {
                accessorFn: (row) => new Date(row.joindate), //convert to Date for sorting and filtering
                accessorKey: 'joindate',
                header: 'JoinDae',
                filterVariant: 'date-range',
                Cell: ({ cell }) => moment(cell.getValue()).format("YYYY/MM/DD"), //render Date as a string
            },
            {
                accessorKey: 'amount',
                header: 'Amount',
                size: 100,
                aggregationFn: 'sum',
                AggregatedCell: ({ cell, table }) => (
                    <>
                        Oldest by{' '}
                        {table.getColumn(cell.row.groupingColumnId ?? '').columnDef.header}:{' '}
                        <Box
                            sx={{ color: 'info.main', display: 'inline', fontWeight: 'bold' }}
                        >
                            {cell.getValue()}
                        </Box>
                    </>
                ),
                Footer: () => (
                    <Stack>
                        Sum Amount:
                        <Box color="warning.main">{Math.round(sumAmount)}</Box>
                    </Stack>
                )
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
                size: 200,
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableGrouping: true,
        initialState: {
            density: 'compact',
        },
    });

    return <MaterialReactTable table={table} />;
};

export default MATable;
