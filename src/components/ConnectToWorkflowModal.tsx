import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ConnectToWorkflowModal = ({ open, onClose }:{open:boolean, onClose:()=>any}) => {
  // Create a custom theme with green primary color
  const theme = createTheme({
    palette: {
      primary: {
        main: "#60a5fa", // Green color
      },
    },
  });
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Clear the fields after submission
    setLabel("");
    setDescription("");

    onClose(); // Close the modal after submission
  };

  return (
     <ThemeProvider theme={theme}>
    <Modal open={open} onClose={onClose}>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Describe the workflow you are connecting to
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Label"
            fullWidth
            margin="normal"
            variant="outlined"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            required
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Connect
          </Button>
        </form>
      </Box>
    </Modal>
    </ThemeProvider>
  );
};

export default ConnectToWorkflowModal;
