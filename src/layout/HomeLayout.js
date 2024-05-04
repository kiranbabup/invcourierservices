import { Box } from "@mui/material";
import MainHeaderComponent from "../components/mainComponents/HeaderComponent";
import FooterComponent from "../components/mainComponents/FooterComponent";
import { mainBGColor } from "../constants";
import SpaceOne from "../components/mainComponents/SpaceOne";
import SpaceTwo from "../components/mainComponents/SpaceTwo";

const HomeLayout = () => {
    return (
        <Box sx={{ backgroundColor: mainBGColor }}>
            <MainHeaderComponent />
            <Box py={4} />
            <SpaceOne/>
            <SpaceTwo/>
            <FooterComponent />
        </Box>
    )
}
export default HomeLayout;