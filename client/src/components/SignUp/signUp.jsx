import { TextField, Button, Box, Typography } from "@mui/material";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "300px",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

const Signup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Box sx={formStyles}>
        <Typography
          variant="h5"
          sx={{ mb: 2 }}
        >
          Sign Up
        </Typography>
        <TextField
          label="Full Name"
          name="text"
          type="text"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
