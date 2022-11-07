import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Receivables from "./pages/Receivables";
import { CssBaseline } from "@mui/material";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/receivables" element={<Receivables />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
