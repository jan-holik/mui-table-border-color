import {alpha, darken, lighten, useTheme} from "@mui/material";
import type * as CSS from "csstype";


export const muiTableBorderColor = (): CSS.Property.BorderColor => {
    const theme = useTheme();
    return theme.palette.mode === "light"
        ? lighten(alpha(theme.palette.divider, 1), 0.88)
        : darken(alpha(theme.palette.divider, 1), 0.68);
};