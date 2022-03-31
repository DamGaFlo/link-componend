import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import InfoIcon from "@mui/icons-material/Info";
import PropTypes from "prop-types";

import "../styles/GroupHead.css";

export default function GroupHead({ info, menuBarToggle }) {
     return (
          <>
               <Box className="header">
                    <Box>
                         <Typography className="title"> {info.name}</Typography>
                    </Box>
                    <Box className="button__menu__container">
                         <Button>
                              <PlusOneIcon className="menu__groupAdd" />
                         </Button>
                         <Button>
                              <InfoIcon
                                   className="menu__groupInfo"
                                   onClick={menuBarToggle}
                              />
                         </Button>
                    </Box>
               </Box>
          </>
     );
}
GroupHead.propTypes = {
     info: PropTypes.any.isRequired,
};

GroupHead.defaultProps = {
     info: { name: "none" },
};
