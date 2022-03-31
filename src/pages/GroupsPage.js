import GroupExtended from "../components/GroupExtended";

import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { services } from "../services/services.js";
import "../styles/GroupPage.css";

export default function GroupsPage() {
     const [userEmail, setUserEmail] = useState("esteesunemail");
     const [groupInfo, setGroupInfo] = useState();
     const [groupSelected, setGroupSelected] = useState("GROUP_NAME");

     useEffect(() => {
          updateGroup();
     }, [groupSelected]);

     const updateGroup = async () => {
          const currentInfoGroup = await services.getInfoGroup(
               groupSelected,
               userEmail
          );
          const currentLinks = await services.getGroupLinks(
               groupSelected,
               userEmail
          );
          currentInfoGroup.links = currentLinks;
          setGroupInfo(currentInfoGroup);
     };

     const handleDeleteLink = async (id) => {
          const resposeBody = await services.deleteLink(
               groupSelected,
               userEmail,
               id
          );
          if (resposeBody !== null) {
               updateGroup();
          }
     };
     const handleDeleteGroup = async (id) => {
          console.log("ya lo borre");
     };
     return (
          <Box className="container-page">
               <div className="suggested-groups">
                    <button>group</button>
               </div>
               <GroupExtended
                    groupProps={groupInfo}
                    handleDeleteLink={handleDeleteLink}
                    handleDeleteGroup={handleDeleteGroup}
               />
          </Box>
     );
}
