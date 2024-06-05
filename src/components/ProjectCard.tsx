import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Snack from "./Snack";
import { IProject, ITechs } from "../interfaces/data";
import { PlaceThemeContext } from "../interfaces/theme";
import { setActualPage, setActualTitle } from "../store/slices/layoutSlice";

import "../styles/components/ProjectCard.scss";

const ProjectCard = ({ title, description, technologies, url }: IProject) => {
  const dispatcher = useDispatch();
  const { themeType } = useContext(PlaceThemeContext);

  return (
    <Card className={`Card-wrapper ${themeType}`}>
      <CardContent className={`CardContent-wrapper ${themeType}`}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{description}</Typography>
        {technologies.map((tech: ITechs) => (
          <Snack
            key={tech.name}
            technologie={tech.name}
            backGroundColor={tech.background}
            textColor={tech.color}
          />
        ))}
      </CardContent>
      <CardActions className={`CardActions-wrapper ${themeType}`}>
        <Link
          to={url}
          onClick={() => {
            dispatcher(setActualPage(url));
            dispatcher(setActualTitle("Back end projects / auth-users"));
          }}
        >
          <Button size="small" className={`Link-text ${themeType}`}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
