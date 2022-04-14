import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// Icons
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Home() {
  const CreateTweet = () => {
    const icons = [
      <ImageOutlinedIcon />,
      <GifBoxOutlinedIcon />,
      <SentimentSatisfiedOutlinedIcon />,
      <CalendarMonthOutlinedIcon />,
      <LocationOnOutlinedIcon />,
    ];
    return (
      <>
        <Box
          sx={{
            display: "flex",
            gap: "20px", 
            width: "100%"
          }}
        >
          <Avatar alt="user pfp" src="https://picsum.photos/id/237/200/300" />
          <Box
          sx={{
            width: "50%"
          }}
          >
            <TextField fullWidth
            multiline
            id="fullWidth"
            />
              <Box
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
              >
                <List
                  sx={{
                    display: "flex",
                  }}
                >
                  {icons.map((element) => {
                    return (
                      <ListItem
                        sx={{
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "12px",
                            color: "#1D9BF0",
                            fontWeight: "300"
                          }}
                        >
                          {element}
                        </ListItemIcon>
                      </ListItem>
                    );
                  })}
                </List>

              <Button 
              sx={{
                alignSelf: "center"
              }}
              variant="contained"
              >Tweet</Button>
              </Box>
          </Box>
        </Box>
      </>
    );
  };
  const Content = () => {
    return (
      <>
        <CreateTweet />
      </>
    );
  };

  return <Content />;
}
