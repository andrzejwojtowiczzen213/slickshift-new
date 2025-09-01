import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/section1.json";
import section2Data from "../assets/section2.json";
import section3Data from "../assets/section3.json";
import section4Data from "../assets/section4.json";

const LottieAnimation = ({ style, section = "section1" }) => {
  const getAnimationData = () => {
    switch (section) {
      case "section2":
        return section2Data;
      case "section3":
        return section3Data;
      case "section4":
        return section4Data;
      default:
        return animationData;
    }
  };

  return (
    <Lottie 
      animationData={getAnimationData()}
      loop
      autoplay
      style={style || { width: 300, height: 300 }}
    />
  );
};

export default LottieAnimation; 