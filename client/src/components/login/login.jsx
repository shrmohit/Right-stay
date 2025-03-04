import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

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
          Login
        </Typography>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          variant="outlined"
          margin="dense"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          variant="outlined"
          margin="dense"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
