import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import PropTypes from "prop-types";

import "../styles/Description.css";

export default function Description({ info }) {
     return (
          <>
               <Box className="info__card">
                    <Box>
                         <Typography className="tittle_card">
                              Descripcion
                         </Typography>
                         <Typography className="name__group__card">
                              {info.name}
                         </Typography>
                         <Typography>{info.description}</Typography>
                    </Box>
               </Box>
          </>
     );
}
Description.propTypes = {
     info: PropTypes.any.isRequired,
};

Description.defaultProps = {
     info: { name: "name" },
};
