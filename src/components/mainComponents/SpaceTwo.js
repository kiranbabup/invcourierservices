import { Box, Card, CardContent, Typography } from "@mui/material";
import { features } from "../../constants";

const SpaceTwo = () => {
    return (
        <Box sx={{ height: "auto", backgroundColor: "lightgray", pb:{sm:"2rem", xs:"16px"} }} >
            <Typography sx={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center", mb: 4 }}>FEATURES</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap:"wrap", px:{xs:0, sm:"6rem"}, gap:2 }}>
                {
                    features.map((f, i) => (
                        <Card sx={{ width: {xs:"150px", sm:"250px"},  }} key={i}>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box sx={{
                                        width: "8rem", height: "8rem", borderRadius: "50%",
                                        background: `linear-gradient(to right, #8000803b, #0000ff78)`,
                                        display: "flex", justifyContent: "center", alignItems: "center"
                                    }}>
                                        <f.icon sx={{ fontSize: "4rem", color: "white" }} />
                                    </Box>
                                </Box>
                                <Box p={2} />
                                <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>{f.title}</Typography>
                                <Typography sx={{ textAlign: "center", color: "gray" }}>{f.descp}</Typography>

                            </CardContent>
                        </Card>
                    ))
                }

            </Box>
        </Box>
    )
}
export default SpaceTwo;