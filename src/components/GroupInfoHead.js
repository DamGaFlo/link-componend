import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

import "../styles/GroupInfoHead.css";

export default function GroupInfoHead({ menuBarToggle }) {
     return (
          <>
               <Box className="info__card">
                    <Box>
                         <Button
                              className="button__close"
                              onClick={menuBarToggle}
                         >
                              <CloseIcon className="menu__close" />
                         </Button>

                         <Typography className="title">
                              {" "}
                              Informacion del grupo
                         </Typography>
                    </Box>
               </Box>
          </>
     );
}
