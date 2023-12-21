import { useMemo, useState, useEffect } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import { Box, Stack } from '@mui/material';
import { EuiToolTip, EuiButtonIcon } from '@elastic/eui';
import ELModal2 from '../../src/elastic/ELModal2';
import moment from 'moment';

//nested data is ok, see accessorKeys in ColumnDef below
const data2 = [
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

const MATable2 = () => {
    const [modalResponse, setmodalResponse] = useState({});
    const [data, setData] = useState(data2);

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
                header: 'JoinDate',
                filterVariant: 'date-range',
                Cell: ({ cell }) => moment(cell.getValue()).format("YYYY/MM/DD"), //render Date as a string
            },
            {
                accessorKey: 'amount',
                header: 'Amount',
                size: 100,
            }
        ],
        [],
    );

    //DELETE action
    const openDeleteConfirmModal = (row) => {
        if (window.confirm(`Are you sure you want to delete this user? ${JSON.stringify(row)}`)) {
            // deleteUser(row.original.id);
        }
    };

    useEffect(() => {
        if (modalResponse.firstName) {
            if (modalResponse.isAdd) {
                const cloneList = [...data];
                cloneList.push(
                    {
                        name: {
                            firstName: modalResponse.firstName,
                            lastName: modalResponse.lastName,
                        },
                        amount: modalResponse.amount,
                        joindate: modalResponse.joinDate
                    }
                )
                setData(cloneList);
                setmodalResponse({});
            }
        }
    }, [modalResponse]);

    const table = useMaterialReactTable({
        columns,
        data,
        enableGrouping: true,
        initialState: {
            density: 'compact',
        },
        enableRowActions: true,
        renderRowActions: ({ row, table }) => (
            <Box xl={{ display: 'flex', gap: '1rem' }}>
                {/* <EuiButtonIcon
                        display="base"
                        iconType="compute"
                        aria-label="Delete"
                        color="primary"
                        onClick={() => openDeleteConfirmModal(row)}
                    /> */}
                <ELModal2 setmodalResponse={setmodalResponse} rowData={row} />
            </Box>
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <ELModal2 setmodalResponse={setmodalResponse} />
        ),
    });

    return (
        <div>
            <MaterialReactTable table={table} />
        </div>

    );
};

export default MATable2;
