import { ISnack } from "../interfaces/components";

import "../styles/components/Snack.scss";

const Snack = ({ technologie, backGroundColor, textColor }: ISnack) => {
  return (
    <span
      className="Snack-wrapper"
      style={{ backgroundColor: backGroundColor, color: textColor }}
    >
      {technologie}
    </span>
  );
};

export default Snack;
