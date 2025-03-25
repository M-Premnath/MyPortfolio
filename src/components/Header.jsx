import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import { FaBars, FaHome, FaInfoCircle, FaProjectDiagram, FaChartBar, FaAward, FaEnvelope, FaCode, FaTimes } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "../styles/style.css";

// Navigation items with section IDs
const navItems = [
  { text: "Home", icon: <FaHome />, id: "home" },
  { text: "About", icon: <FaInfoCircle />, id: "about" },
  { text: "Statistics", icon: <FaChartBar />, id: "statistics" }, 
  { text: "Skills", icon: <FaCode />, id: "skills" },              
  { text: "Projects", icon: <FaProjectDiagram />, id: "projects" }, 
  { text: "Certificate", icon: <FaAward />, id: "certificate" },  
  { text: "Contact", icon: <FaEnvelope />, id: "footer" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle drawer
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Scroll to section and close drawer
  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // Drawer content
  const drawer = (
    <Box sx={{ width: 250, textAlign: "center", height: "100vh", backgroundColor: "rgba(6, 6, 6, 0.94)", color: "white" }} >
      {/* Drawer Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
        <Typography variant="h6">Premnath.M</Typography>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <FaTimes />
        </IconButton>
      </Box>

      {/* Navigation List */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleNavClick(item.id)}>
              <ListItemIcon sx={{ color: "white", marginRight: "-20px" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: "1rem", pb: 4 }}>
        <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/premnath-m/" target="_blank">
          <FaLinkedin />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://github.com/M-Premnath" target="_blank">
          <FaGithub />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://x.com/Premnath_T_M" target="_blank">
          <RiTwitterXFill  />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "rgba(6, 6, 6, 0.45)", color: "#fff", boxShadow: "none" }}>
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <FaBars />
          </IconButton>

          {/* Website Title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>

          {/* Desktop Navigation Icons */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
            {navItems.map((item) => (
              <Tooltip key={item.text} title={item.text} arrow placement="bottom" >
              <IconButton color="inherit" onClick={() => handleNavClick(item.id)}>
                {item.icon}
              </IconButton>
            </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Navigation for Mobile */}
      <Drawer anchor="left" variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ "& .MuiDrawer-paper": { width: 250 } }}>
        {drawer}
      </Drawer>

      <Toolbar />
    </Box>
  );
}

export default Header;
