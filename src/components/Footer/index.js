import React from "react";

// Icons
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

// Images
import Logo from "../../assets/logo-coffee-white.png";

// Styles
import { Container, Content, SocialMediaArea } from "./styles";

const Footer = () => (
  <Container className="container">
    <Content className="container-wrap">
      <img src={Logo} alt="logo" />
      <SocialMediaArea>
        <a href="https://www.instagram.com/pedrowand/">
          <InstagramIcon style={{ color: "#fff" }} />
        </a>
        <a href="https://www.facebook.com/pedro.wanderley.3">
          <FacebookIcon style={{ color: "#fff" }} />
        </a>
        <a href="https://www.youtube.com/channel/UCAEa2d8qdFbluis_DwATAKw">
          <YouTubeIcon style={{ color: "#fff" }} />
        </a>
      </SocialMediaArea>
    </Content>
  </Container>
);

export default Footer;
