import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginSignUpPage = ({setIsAuthenticated}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(input);
  };

  const handleSendOTP = () => {
    console.log("Sending OTP to:", phoneNumber);
    setOtpSent(true);
  };

  const handleOTPChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(input);
  };

  const handleVerifyOTP = () => {
    if (otp === "123456") {
      console.log("OTP verified successfully!");
      setIsAuthenticated(true);
      setOtpVerified(true);
    } else {
      alert("Incorrect OTP. Try Again!")
      console.log("Incorrect OTP");
    }
  };

  return (
    <Container style={{marginTop:"15%"}} component="main" maxWidth="xs">
        <div>
        <Card style={{ height: "350px", width: "400px", backgroundColor: "#dedcdc" }}>
        <div style={{ marginTop:"2rem" ,padding: "1rem" }}>
        <Typography variant="h5" style={{ marginTop: "1rem" , marginLeft :"10rem", marginBottom:"1rem"}} >Login</Typography>
        {!otpSent && (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  style={{ marginTop: "1rem" }}
                  variant="outlined"
                  required
                  fullWidth
                  label="Mobile Number"
                  autoFocus
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                />
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: "2rem" }}
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSendOTP}
            >
              Send OTP
            </Button>
          </>
        )}
        {otpSent && !otpVerified && (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  style={{ marginTop: "1rem" }}
                  variant="outlined"
                  required
                  fullWidth
                  label="OTP"
                  autoFocus
                  value={otp}
                  onChange={handleOTPChange}
                />
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: "2rem" }}
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleVerifyOTP}
            >
              Verify OTP
            </Button>
          </>
        )}
        {otpVerified && (<>
            <Typography variant="body1" style={{ marginTop: "5rem", marginBottom:"3rem", marginLeft:"5.4rem"}}>
            OTP verified successfully!
            </Typography>
            <Link to="/dashboard">
            <Button
              style={{ marginTop: "2rem" }}
              fullWidth
              variant="contained"
              color="primary"
            >
              Go to Dashboard
            </Button>
          </Link>
        </>)}
        </div>
        </Card>
      </div>
        
    </Container>
  );
};

export default LoginSignUpPage ;
