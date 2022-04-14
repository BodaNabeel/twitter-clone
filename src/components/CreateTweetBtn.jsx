import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function CreateTweetBtn() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    color: "white",
    textAlign: "center",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button 
      variant="contained"
      sx={{
          bgcolor:"#1D9BF0",
          color: "white",
          margin: "0 auto",
          width: "80%",
          borderRadius: 5
      }}
      onClick={handleOpen
      }>Tweet</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This area will be used to write new tweet
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
