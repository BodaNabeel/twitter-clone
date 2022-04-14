import { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListIcon from "@mui/icons-material/List";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import CreateTweetBtn from "./CreateTweetBtn";

export default function MUIDrawer(props) {
  const drawerWidth = 240;
  const {title} = props;
  const { window } = props;
  const {content} = props
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerInfo = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Explore",
      icon: <TagIcon />,
    },
    {
      text: "Notifications",
      icon: <NotificationsNoneIcon />,
    },
    {
      text: "Messages",
      icon: <MailOutlineIcon />,
    },
    {
      text: "Bookmarks",
      icon: <BookmarkBorderIcon />,
    },
    {
      text: "Lists",
      icon: <ListIcon />,
    },
    {
      text: "Profiles",
      icon: <PermIdentityIcon />,
    },
    {
      text: "More",
      icon: <MoreHorizIcon />,
    },
  ];
  const drawer = (
    <>
      <ListItemIcon
        sx={{
          margin: "20px",
          color: "#1D9BF0",
        }}
      >
        <TwitterIcon />
      </ListItemIcon>
      <List>
        {drawerInfo.map((el) => (
          <ListItem button key={el.text}>
            <ListItemIcon>{el.icon}</ListItemIcon>
            <ListItemText primary={el.text} />
          </ListItem>
        ))}
      </List>
      <CreateTweetBtn />
    </>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          bgcolor: "white",
        }}
      >
        <Toolbar
          sx={{
            
            color: "black",
          }
        }
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography fontWeight="700" variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}
