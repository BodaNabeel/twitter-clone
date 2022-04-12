import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import CreateTweet from "./CreateTweet";
export default function MUIDrawer() {
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
      <CreateTweet />
      </>
  );
  return (
    <Drawer 
    PaperProps={{
        sx: {
            width: 240,
            ml:5,
        }
    }}
    open 
    variant="permanent">
      {drawer}
    </Drawer>
  );
}
