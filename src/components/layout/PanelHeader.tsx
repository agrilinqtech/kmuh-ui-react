import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: (theme.vars ?? theme).palette.divider,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
}));


export interface DashboardHeaderProps {
    logo?: React.ReactNode;
    title?: string;
    menuOpen: boolean;
    onToggleMenu: (open: boolean) => void;
}

export default function PanelHeader() {

    return (
        <AppBar position="fixed">
        </AppBar>
    )

}
