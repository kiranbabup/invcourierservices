import { Box, IconButton, Typography, useScrollTrigger } from "@mui/material";
import { contactInfo, footerItems, logoName, mainBGColor, socialMediaLinks, } from "../../constants";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";


const FooterComponent = ({ contactRef }) => {
  const { pathname, hash } = useLocation();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const match = (path) => (path ? !!matchPath(`${pathname}${hash}`, path) : false);

  return (
    <Box sx={{ backgroundColor: "#3b3837", py: 5, display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }} ref={contactRef} >
      <Box>
        <a href="/invcourierservices/home" title={logoName} style={{ textDecoration: "none", fontSize: "2rem", color: mainBGColor, paddingLeft:"8px" }}>
          {logoName}
        </a>
        <Box sx={{display:"flex"}}> 
        {
          socialMediaLinks.map((s,i)=>(
            <IconButton key={i} sx={{color:"white"}} onClick={()=>window.open(s.link)} ><s.icon/></IconButton>
          ))
        }
        </Box>
      </Box>

      <Box>
        {footerItems.map((item, index) => (
          <Box key={index} sx={{ display: "flex", height: "50px", alignItems: "center" }}>
            <Box
              component={!item.isDialog ? RouterLink : item.target ? "a" : "div"}
              {...(item.target && { href: item.link, target: "_blank" })}
              sx={{ color: match(item.link) ? "blue" : trigger ? "white" : "green" }}
              to={item.link}
            >
              {item.title}
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ color: "white", width: "300px" }}>
        <h2>Contact Info</h2>
        {contactInfo.map((c, i) => (
          <Box key={i}>
            <Typography sx={{ display: "flex", alignItems: "center" }}><c.icon />  &ensp; {c.title}</Typography>
            <Typography py={1} sx={{color:"#ffffff9c", fontSize:"0.8rem"}}>{c.data}</Typography>
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default FooterComponent;