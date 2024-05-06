import { Box, AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { items, logoName, mainColor, mainBGColor, DRAWER_WIDTH, textColor } from '../../constants';
import { useNavigate } from 'react-router-dom';

const navItems = items;

function MainHeaderComponent(props) {
    const { window, scrollToAbout } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography sx={{ my: 2, fontSize: "1.5rem", fontWeight: "bold" }} onClick={() => navigate("/")}>{logoName}</Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => {
                            if (item.title === "About us") {
                                scrollToAbout();
                            } else {
                                navigate(item.link);
                            }
                        }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar sx={{ backgroundColor: mainBGColor, }}>

                    <Box sx={{ display: { xs: "flex", sm: "none" }, width: { xs: "100%" }, justifyContent: { xs: "space-between" }, alignItems: { xs: "center" } }}>
                        <Typography sx={{ my: 2, color: textColor, fontSize: "1.5rem", fontWeight: "bold" }} onClick={() => navigate("/")}>{logoName}</Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }, }}
                        >
                            <MenuIcon sx={{ color: mainColor }} />
                        </IconButton>
                    </Box>

                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: textColor, fontSize: "2rem", fontWeight: "bold", pl: 5 }} onClick={() => navigate("/")}
                    >{logoName}</Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' }, pr: 10 }}>
                        {navItems.map((item, index) => (
                            <Button key={index} sx={{ color: mainColor, }} onClick={() => {
                                if (item.title === "About us") {
                                    scrollToAbout();
                                } else {
                                    navigate(item.link);
                                }
                            }}>
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
export default MainHeaderComponent;