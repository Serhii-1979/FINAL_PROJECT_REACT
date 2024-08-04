import React from "react";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Determine sizes based on screen size
  // const textFieldHeight = isSmallScreen ? 40 : isMediumScreen ? 50 : 60;
  const iconButtonSize = isSmallScreen ? 40 : isMediumScreen ? 50 : 60;
  const fontSize = isSmallScreen ? "16px" : isMediumScreen ? "18px" : "20px";

  return (
    <TextField
      type="text"
      value={quantity}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: "10px",
          // height: textFieldHeight,
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
                borderRadius: "10px 0 0 10px",
                marginRight: "-1px",
                height: iconButtonSize,
                width: iconButtonSize,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
                borderLeft: "1px solid #dddddd",
                borderRadius: "0 10px 10px 0",
                height: iconButtonSize,
                width: iconButtonSize,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Add />
            </IconButton>
          </InputAdornment>
        ),
        inputProps: {
          readOnly: true,
          style: {
            fontSize: fontSize,
            fontWeight: 600,
            lineHeight: "26px",
            textAlign: "center",
          }
        }
      }}
      variant="outlined"
    />
  );
}

export default QuantitySelector;



// import React from "react";
// import { IconButton, TextField, InputAdornment } from "@mui/material";
// import { Add, Remove } from "@mui/icons-material";

// function QuantitySelector({ quantity, onIncrease, onDecrease }) {
//   return (
//     <TextField
//       type="text"
//       value={quantity}
//       sx={{
//         '& .MuiOutlinedInput-root': {
//           borderRadius: "10px",
//           height: 60,
//           margin: 0,
//         },
//         margin: 0,
//       }}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <IconButton
//               onClick={onDecrease}
//               sx={{
//                 borderRight: "1px solid #dddddd",
//                 borderRadius: "10px",
//                 marginRight: "-1px",
//                 height: 60,
//                 width: 60,
//               }}
//             >
//               <Remove />
//             </IconButton>
//           </InputAdornment>
//         ),
//         endAdornment: (
//           <InputAdornment position="end">
//             <IconButton
//               onClick={onIncrease}
//               sx={{
//                 borderLeft: "1px solid #dddddd",
//                 borderRadius: "10px 0 0 10px",
//                 // marginRight: "-1px",
//                 height: 60,
//                 width: 60,
//               }}
//             >
//               <Add />
//             </IconButton>
//           </InputAdornment>
//         ),
//         inputProps: {
//           readOnly: true,
//           style: {
//             fontSize: "20px",
//             fontWeight: 600,
//             lineHeight: "26px",
//             textAlign: "center",
//             // padding: "5px 10px",
//           }
//         }
//       }}
//       variant="outlined"
//     />
//   );
// }

// export default QuantitySelector;
