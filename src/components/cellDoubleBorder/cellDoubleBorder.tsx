import React from "react";
import { TableCell } from "@mui/material";
import { muiTableBorderColor } from "../../services/muiTableBorderColor";


type CellDoubleBorderType = {
    children: React.ReactNode;
};

export const CellDoubleBorder: React.FC<CellDoubleBorderType> = props => {

    const borderColor = muiTableBorderColor();

    return <TableCell sx={{ borderRight: `double ${borderColor}` }} children={props.children} />;
};