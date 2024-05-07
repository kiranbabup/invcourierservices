import React, { useRef } from 'react';
import { Box } from "@mui/material";
import MainHeaderComponent from "../components/mainComponents/HeaderComponent";
import FooterComponent from "../components/mainComponents/FooterComponent";
import { mainBGColor } from "../constants";
import SpaceOne from "../components/mainComponents/SpaceOne";
import SpaceTwo from "../components/mainComponents/SpaceTwo";
import SpaceThree from "../components/mainComponents/SpaceThree";
// import SpaceFour from '../components/mainComponents/SpaceFour';

const HomeLayout = () => {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollTocontact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Box sx={{ backgroundColor: mainBGColor }}>
            <MainHeaderComponent scrollToAbout={scrollToAbout} scrollTocontact={scrollTocontact} />
            <Box py={4} />
            <SpaceOne/>
            <SpaceTwo/>
            <SpaceThree aboutRef={aboutRef}/>
            {/* <SpaceFour contactRef={contactRef}/> */}
            <FooterComponent contactRef={contactRef}/>
        </Box>
    )
}
export default HomeLayout;