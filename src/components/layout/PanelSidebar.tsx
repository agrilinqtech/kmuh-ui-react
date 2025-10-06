import Drawer from '@mui/material/Drawer';


export default function PanelSidebar() {


    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                displayPrint: 'none',
                width: '240px',
                flexShrink: 0,
            }}
        >
            {"測試資料"}
        </Drawer>
    )

}