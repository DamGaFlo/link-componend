import Box from "@mui/material/Box";
import GroupHead from "./GroupHead";
import LinkList from "./LinkList";
import GroupInfo from "../components/GroupInfo";
import { useState } from "react";

import "../styles/GroupExtended.css";

export default function GroupExtended({
     groupProps,
     handleDeleteLink,
     handleDeleteGroup,
}) {
     const [menuBarActive, setMenuBarActive] = useState(false);

     const menuBarToggle = () => {
          setMenuBarActive(!menuBarActive);
     };
     return (
          <Box className="group-extended-container">
               <GroupHead info={groupProps} menuBarToggle={menuBarToggle} />
               <LinkList
                    info={groupProps}
                    handleDeleteLink={handleDeleteLink}
               />
               <GroupInfo
                    groupProps={groupProps}
                    active={menuBarActive}
                    menuBarToggle={menuBarToggle}
                    handleDeleteGroup={handleDeleteGroup}
               />
          </Box>
     );
}
