import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fortune from "./pages/Fortune/Fortune";
import FortuneSupport from "./pages/Fortune/FortuneSupport";
import LiveOn from "./pages/LiveOn";
import LiveOnSupport from "./pages/LiveOnSupport";
import Connect from "./pages/Connect/Connect";
import ConnectSupport from "./pages/Connect/ConnectSupport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/liveOn" element={<LiveOn />} />
        <Route path="/streamAlertSupport" element={<LiveOnSupport />} />
        <Route path="/fortune" element={<Fortune />} />
        <Route path="/fortuneSupport" element={<FortuneSupport />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/connectSupport" element={<ConnectSupport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
