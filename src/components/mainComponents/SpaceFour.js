import { Box, Typography } from "@mui/material";

const SpaceFour = ({ contactRef }) => {
    return (
        <Box ref={contactRef}
            sx={{ py: { xs: 2, sm: 6 }, px: { xs: 2, sm: 10 }, display: "flex", flexDirection: "column", }}
            >
            <Typography>GET IN TOUCH</Typography>
            <Box>
                
            </Box>
        </Box>
    )   
}
export default SpaceFour;