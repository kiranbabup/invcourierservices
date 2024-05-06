import React, { useRef } from 'react';
import { Box } from "@mui/material";
import MainHeaderComponent from "../components/mainComponents/HeaderComponent";
import FooterComponent from "../components/mainComponents/FooterComponent";
import { mainBGColor } from "../constants";
import SpaceOne from "../components/mainComponents/SpaceOne";
import SpaceTwo from "../components/mainComponents/SpaceTwo";
import SpaceThree from "../components/mainComponents/SpaceThree";

const HomeLayout = () => {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Box sx={{ backgroundColor: mainBGColor }}>
            <MainHeaderComponent scrollToAbout={scrollToAbout}/>
            <Box py={4} />
            <SpaceOne/>
            <SpaceTwo/>
            <SpaceThree aboutRef={aboutRef}/>
            <FooterComponent />
        </Box>
    )
}
export default HomeLayout;