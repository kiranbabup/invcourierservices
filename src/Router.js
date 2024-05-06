import { Navigate, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomeLayout />} />
        </Routes>
  );
};

export default Router;
