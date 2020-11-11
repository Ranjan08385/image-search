import React from "react";
import "./SeasonDisplay.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const getSeasonText = {
  Summer: {
    text: "It's very Hot here",
  },
  Winter: {
    text: "It's very Cold here",
  },
};

function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text } = getSeasonText[season];
  return (
    <div className="season">
      <AcUnitIcon className="season__leftIcon" />
      <p className="season__text">{text}</p>
      <AcUnitIcon className="season__rightIcon" />
    </div>
  );
}

export default SeasonDisplay;
