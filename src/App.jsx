import { Navigate, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
