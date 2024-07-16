import React from 'react';
import titleImg from "../../../assets/images/titleHeader.png";
import Button from '@mui/material/Button';
import "./mainPage.css";

function MainPageTitle() {
  return (
    <div className="mainPageTitle">
      <div className="mainPageTitle_img">
        <img src={titleImg} alt="img" />
      </div>
      <div className="mainPageTitle_text">
        <h1>Amazing Discounts<br />on Pets Products!</h1>
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: '#0D50FF',
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '26px',
            textAlign: 'center',
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#3a6ded'
            }
          }}
        >
          Check out
        </Button>
      </div>
    </div>
  );
}

export default MainPageTitle;
