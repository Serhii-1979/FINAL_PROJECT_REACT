import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imgDog from '../../assets/images/mage.png';
import img4 from "../../assets/svg/4.svg"
import styles from "./NotFound.module.css";

const theme = createTheme();

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.notFound} data-aos="fade-up">
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
            {t('pageNotFound')}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ fontFamily: "Montserrat", maxWidth: "600px", m: "0 auto" }}>
            {t('pageNotFoundMessage')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{ mt: 3, padding: "8px 40px", backgroundColor: "#0d50ff", fontFamily: "Montserrat" }}
          >
            {t('goHome')}
          </Button>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default NotFoundPage;
