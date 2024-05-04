import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />} />
        </Routes>
  );
};

export default Router;
