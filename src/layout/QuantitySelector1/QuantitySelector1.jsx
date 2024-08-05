import React from "react";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <TextField
      type="text"
      value={quantity}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: "10px",
          height: {
            xs: 40, // 0px - 600px
            sm: 50, // 600px - 960px
            md: 60, // 960px - 1280px
          },
          margin: 0,
        },
        margin: 0,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              onClick={onDecrease}
              sx={{
                borderRight: "1px solid #dddddd",
                borderRadius: "10px",
                marginRight: "-1px",
                height: {
                  xs: 40, // 0px - 600px
                  sm: 50, // 600px - 960px
                  md: 60, // 960px - 1280px
                },
                width: {
                  xs: 40, // 0px - 600px
                  sm: 50, // 600px - 960px
                  md: 60, // 960px - 1280px
                },
              }}
            >
              <Remove />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={onIncrease}
              sx={{
                // fontSize: {
                //   xs: "16px", // 0px - 600px
                //   sm: "18px", // 600px - 960px
                //   md: "10px", // 960px - 1280px
                // },
                borderLeft: "1px solid #dddddd",
                borderRadius: "10px 0 0 10px",
                height: {
                  xs: 40, // 0px - 600px
                  sm: 50, // 600px - 960px
                  md: 60, // 960px - 1280px
                },
                width: {
                  xs: 40, // 0px - 600px
                  sm: 50, // 600px - 960px
                  md: 60, // 960px - 1280px
                },
              }}
            >
              <Add />
            </IconButton>
          </InputAdornment>
        ),
        inputProps: {
          readOnly: true,
          style: {
            fontSize: {
              xs: "16px", // 0px - 600px
              sm: "18px", // 600px - 960px
              md: "20px", // 960px - 1280px
            },
            fontWeight: 600,
            lineHeight: "26px",
            textAlign: "center",
          },
        },
      }}
      variant="outlined"
    />
  );
}

export default QuantitySelector;
