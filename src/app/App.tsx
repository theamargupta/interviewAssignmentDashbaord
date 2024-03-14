import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";

export const App: React.FC  = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
