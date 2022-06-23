import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import PrivateSingle from "./pages/Private/PrivateHome/PrivateSingle";
import PrivateWip from "./pages/Private/PrivateHome/PrivateWip";
//
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/private" element={<Private />}>
        <Route path="/private/private-home" element={<PrivateHome />} />
        <Route path="/private/private-single" element={<PrivateSingle />} />
        <Route path="/private/private-wip" element={<PrivateWip />} />
      </Route>
    </Routes>
  );
}

export default App;
