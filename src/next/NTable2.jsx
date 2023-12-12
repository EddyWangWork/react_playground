import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

function NTable2() {

    const columns = [
        { name: "NAME", uid: "name" },
        { name: "DESC", uid: "desc" },
        { name: "AMOUNT", uid: "amount" },
    ];

    const dataItems = [
        {
            id: 1,
            mainname: "food",
            name: "breakfast",
            desc: "kfc",
            amount: 100,
        },
        {
            id: 2,
            mainname: "food",
            name: "lunch",
            desc: "mcd",
            amount: 50,
        },
        {
            id: 3,
            mainname: "food",
            name: "dinner",
            desc: "tealive",
            amount: 25,
        }
    ];

    const renderCell = React.useCallback((item, columnKey) => {
        const cellValue = item[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{item.mainname}</p>
                    </div>
                );
            case "desc":
                return (
                    cellValue
                );
            case "amount":
                return (
                    cellValue
                );
            default:
                return cellValue;
        }
    }, []);

    const table = () => {
        return (
            <Table
                aria-label="Example table with custom cells"
            >
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={dataItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        )
    }

    return (
        table()
    );
}

export default NTable2;