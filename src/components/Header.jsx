import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import MenuRoundedIcon  from "@mui/icons-material/Menu";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from "@mui/icons-material/Info";
import BuildRoundedIcon from "@mui/icons-material/Build";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMail";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

const navItems = [
  { text: "Home", icon: <HomeRoundedIcon /> },
  { text: "About", icon: <InfoRoundedIcon /> },
  { text: "Services", icon: <BuildRoundedIcon /> },
  { text: "Contact", icon: <ContactMailRoundedIcon /> },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ width: 250, textAlign: "center", height: '100vh' }} color={"white"} backgroundColor={"rgba(6, 6, 6, 0.9)"}>
      {/* Drawer Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
        <Typography variant="h6">MyWebsite</Typography>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <MenuOpenRoundedIcon  />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:"white"}}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{backgroundColor: "rgba(6, 6, 6, 0.45)", color: "#fff", boxShadow: "none"}}>
        <Toolbar>
          {/* Rounded Menu Icon for Mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }}}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyWebsite
          </Typography>
          {/* Icons only on Desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 6 }}>
            {navItems.map((item) => (
              <IconButton key={item.text} color="inherit"  aria-label={item.text}>
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="left"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { width: 250 } }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}

export default Header;
