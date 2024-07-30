import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imgDog from '../../assets/images/mage.png';
import img4 from "../../assets/svg/4.svg"

import styles from "./NotFound.module.css"

const theme = createTheme();

function NotFoundPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.notFound}  data-aos="fade-up">
      <Container sx={{ textAlign: 'center', mt: 5, mb: 10, fontFamily: "Montserrat" }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: 200,
              height: 200,
              backgroundImage: `url(${img4})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: 300,
              height: 300,
              backgroundImage: `url(${imgDog})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: 200,
              height: 200,
              backgroundImage: `url(${img4})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Box>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, fontSize: 60, fontFamily: "Montserrat" }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ fontFamily: "Montserrat" }}>
          We're sorry, the page you requested could not be found. <br />
          Please go back to the homepage.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ mt: 3, padding: "8px 40px", backgroundColor: "#0d50ff", fontFamily: "Montserrat" }}
        >
          Go Home
        </Button>
      </Container>
      </div>
    </ThemeProvider>
  );
}

export default NotFoundPage;
