import {
  Avatar,
  Button,
  InputBase,
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
      <ImageOutlinedIcon sx={{fontSize: "18px"}} />,
      <GifBoxOutlinedIcon sx={{fontSize: "18px"}}/>,
      <SentimentSatisfiedOutlinedIcon sx={{fontSize: "18px"}}/>,
      <CalendarMonthOutlinedIcon sx={{fontSize: "18px"}}/>,
      <LocationOnOutlinedIcon sx={{fontSize: "18px"}}/>,
    ];

    const textFieldStyle = {
      outline: "none",
      border: "none"
    }
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
            <InputBase
            fullWidth
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows="12"
            placeholder="What's happening?"
           
            sx={{
              border:"none",
              "&.Mui-focused": {
                borderBottom: "0.5px solid black"
              }
            }}
            />
              <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "30px 10px 0"
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
                            height: "6px",
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
                alignSelf: "center",
                borderRadius: "30px"
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
