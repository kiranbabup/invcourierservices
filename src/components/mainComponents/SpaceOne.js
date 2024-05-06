import { Box, Typography } from "@mui/material";
const SpaceOne = () => {
    return (
            <Box sx={{ position: "relative" }} >
                <Box
                    component="img"
                    alt="Starting image"
                    src="/static/intro-bg.jpg"
                    sx={{ width: "100%", height: {xs:"45vh", sm:"91vh"}, position: "absolute" }}
                />
                <Box sx={{
                    width: "100%", height: {xs:"45vh", sm:"91vh"}, textAlign: "center", 
                    backgroundColor: "#80808082", position: "relative", zIndex: 1, display: "flex", flexDirection:"column",
                    justifyContent: "center", alignItems: "center",
                    color:"white"
                }}>
                    <Typography sx={{ fontSize: {xs:"1.5rem", sm:"4rem"}, fontWeight: "bold" }}>WE OFFER <br />COURIER SERVICES</Typography>
                    <Typography sx={{width:"50%", color:"black"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</Typography>
                </Box>
            </Box>
    )
}
export default SpaceOne;