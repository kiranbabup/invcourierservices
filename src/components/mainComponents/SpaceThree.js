import { Box, Typography } from "@mui/material";
import { whyUs } from "../../constants";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const SpaceThree = ({ aboutRef }) => {
    return (
        <Box ref={aboutRef}
            sx={{ py: { xs: 2, sm: 6 }, px: { xs: 2, sm: 10 }, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", flexDirection: { xs: "column", sm:"row" } }}>
                <Box sx={{ width: { xs: "100%", sm: "45%" }, height: "60vh", }}
                    component="img"
                    alt="About image"
                    src="/static/import.PNG"
                />
                <Box sx={{ width: { xs: "100%", sm: "45%" }, px: { xs: 0, sm: 3 } }}>
                    <Typography sx={{ fontSize: { xs: "1.5rem", sm: "3rem" }, fontWeight: "bold" }}>ABOUT US</Typography>
                    <Typography sx={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <br />
                        <br />
                        &emsp; &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-evenly", flexDirection: { xs: "column-reverse", sm:"row"  } }}>
                <Box sx={{ width: { xs: "100%", sm: "45%" }, px: { xs: 0, sm: 3 } }}>
                    <Typography sx={{ fontSize: { xs: "1.5rem", sm: "3rem" }, fontWeight: "bold" }}>Why Choose Us?</Typography>
                    {
                        whyUs.map((y, i) => (
                            <Typography sx={{ display: "flex", alignItems: "center", py: 1 }}><TaskAltIcon sx={{ color: "#6794f4" }} /> &ensp; {y.points}</Typography>
                        ))
                    }
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "45%" }, height: "60vh", }}
                    component="img"
                    alt="About image"
                    src="/static/export.jpg"
                />
            </Box>
        </Box>
    )
}
export default SpaceThree;