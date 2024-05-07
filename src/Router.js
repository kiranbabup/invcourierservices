import { Navigate, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

const Router = () => {
    return (
        <Routes>
            <Route path="/invcourierservices" element={<Navigate to="/invcourierservices/home" />} />
            <Route path="/invcourierservices/home" element={<HomeLayout />} />
        </Routes>
  );
};

export default Router;
