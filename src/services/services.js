const url = "https://localhost:7203/v1/jeebka/";

const getInfoGroup = async (groupName, userEmail) => {
     const response = await fetch(
          `${url}users/${userEmail}/groups/${groupName}`
     );
     if (response.status === 404) {
          return null;
     }
     const json = await response.json();
     return json;
};

const getGroupLinks = async (groupName, userEmail) => {
     const response = await fetch(
          `${url}users/${userEmail}/groups/${groupName}/links`
     );
     if (response.status === 404) {
          return null;
     }
     const json = await response.json();
     return json;
};

const deleteLink = async (groupName, userEmail, linkId) => {
     const response = await fetch(
          `${url}users/${userEmail}/groups/${groupName}/links/${linkId}`,
          { method: "DELETE" }
     );
     if (response.status === 200) {
          return true;
     }
     return false;
};

export const services = {
     getInfoGroup,
     getGroupLinks,
     deleteLink,
};
