import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { CellDoubleBorder } from "../cellDoubleBorder/cellDoubleBorder";


export const TableBorders: React.FC = () => {

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <CellDoubleBorder>Name</CellDoubleBorder>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <CellDoubleBorder>John Doe</CellDoubleBorder>
                    <TableCell>john@example.com</TableCell>
                </TableRow>
                <TableRow>
                    <CellDoubleBorder>Jane Doe</CellDoubleBorder>
                    <TableCell>jane@example.com</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};