import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

const Like = (props) => {
  return (
    <FontAwesomeIcon
      icon={props.liked ? fasFaHeart : farFaHeart}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
};
export default Like;
