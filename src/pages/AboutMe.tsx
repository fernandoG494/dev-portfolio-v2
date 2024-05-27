import { ReactNode } from "react";
import { ReactSVG } from "react-svg";
import { Stack, Typography } from "@mui/material";

import ReactLogo from "../assets/svgs/react.svg";
import NestLogo from "../assets/svgs/nestjs.svg";
import NodeLogo from "../assets/svgs/nodedotjs.svg";
import AngularLogo from "../assets/svgs/angular.svg";
import TypeScriptLogo from "../assets/svgs/typescript.svg";
import JavaScriptLogo from "../assets/svgs/javascript.svg";

import Profile from "../assets/Profile.jpg";

import "../styles/pages/AboutMe.scss";

const AboutMe = (): ReactNode => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <div id="Column-1">
        <img src={Profile} className="Profile" alt="Profile" />
        <Typography align="center" style={{ fontWeight: "bold" }}>
          Web developer & Ethical hacker
        </Typography>

        <Typography align="center" style={{ marginTop: "20px" }}>
          Main technologies
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className="TechStack"
        >
          <ReactSVG
            src={JavaScriptLogo}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 30px;");
              svg.querySelector("path")!.setAttribute("fill", "#F7DF1E");
            }}
          />

          <ReactSVG
            src={TypeScriptLogo}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 30px;");
              svg.querySelector("path")!.setAttribute("fill", "#3178C6");
            }}
          />
          <ReactSVG
            src={ReactLogo}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 30px;");
              svg.querySelector("path")!.setAttribute("fill", "#61DAFB");
            }}
          />
          <ReactSVG
            src={NodeLogo}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 30px;");
              svg.querySelector("path")!.setAttribute("fill", "#5FA04E");
            }}
          />
          <ReactSVG
            src={AngularLogo}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 30px;");
              svg.querySelector("path")!.setAttribute("fill", "#ED1D24");
            }}
          />
          <ReactSVG
            src={NestLogo}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 30px;");
              svg.querySelector("path")!.setAttribute("fill", "#E0234E");
            }}
          />
        </Stack>
        <Typography align="center" style={{ marginTop: "20px" }}>
          Ethical hacker badges
        </Typography>
        <Stack
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://www.hackthebox.eu/badge/image/20709"
            alt="HackTheBox"
            id="HTB-band"
          />
          <img
            src="https://tryhackme-badges.s3.amazonaws.com/Incuerd0.png"
            alt="TryHackMe"
            id="THM-band"
          />
        </Stack>
      </div>
      <div id="Column-2">
        <h2>Hello!</h2>
        <h3>Welcome to my developer portfolio!</h3>
        <div>
          I’m Fernando, a passionate Fullstack JavaScript web developer with a
          preference for front-end technologies.
        </div>
        <div>
          Here, you can explore some of the projects I've worked on, primarily
          focused on creating dynamic and robust web applications both on the
          frontend and backend.
        </div>

        <Typography
          variant="h6"
          style={{
            fontWeight: "600",
            textAlign: "left",
            marginTop: "2vh",
            textDecorationLine: "underline",
          }}
        >
          Professional experience
        </Typography>
        <div>
          With four years of experience in the tech industry, I've had the
          opportunity to collaborate with both small teams and large
          corporations, taking on roles as a software developer and tester.
        </div>
        <div>
          My journey has led me to specialize in various aspects of web
          development, including security analysis and implementing cutting-edge
          solutions. Currently, I’m a Software Engineer at Softtek Inc. in
          Aguascalientes, México.
        </div>

        <Typography
          variant="h6"
          style={{
            fontWeight: "600",
            textAlign: "left",
            marginTop: "2vh",
            textDecorationLine: "underline",
          }}
        >
          Education
        </Typography>
        <div>
          I hold a degree in Computer Systems Engineering from UPIIZ - IPN,
          where I delved into artificial intelligence and game development using
          Unity.
        </div>

        <Typography
          variant="h6"
          style={{
            fontWeight: "600",
            textAlign: "left",
            marginTop: "2vh",
            textDecorationLine: "underline",
          }}
        >
          Professional focus
        </Typography>
        <div>
          My role involves developing secure coding solutions fro components and
          web content, reviewing vulnerabilities, and ensuring the robustness of
          applications built with React, Angular, Node, and Nest. I've also
          worked on exciting projects for companies like Walmart, Viasat, and
          AeroMéxico, where I've honed my skills in front-end technologies and
          testing.
        </div>
      </div>
    </Stack>
  );
};

export default AboutMe;
