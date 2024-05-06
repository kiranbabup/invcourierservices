import { Box, useScrollTrigger } from "@mui/material";
import { footerItems, logoName, mainBGColor, } from "../../constants";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";

const FooterComponent = () => {
  const { pathname, hash } = useLocation();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const match = (path) => (path ? !!matchPath(`${pathname}${hash}`, path) : false);

  return (
    <Box sx={{ height: "40vh", backgroundColor: "#3b3837", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
      <Box py={1} >
        <a href="/" title={logoName} style={{ textDecoration: "none", fontSize: "2rem", color: mainBGColor}}>
          {logoName}
        </a>
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
    </Box>
  );
};

export default FooterComponent;