import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupsPage from "./pages/GroupsPage";

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/" element={<GroupsPage />}></Route>
               </Routes>
          </Router>
     );
}

export default App;
