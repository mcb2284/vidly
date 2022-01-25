import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

class LikeButton extends Component {
  state = {
    liked: false,
  };
  handleLike = () => {
    console.log(this.state.liked);
    if (this.state.liked) {
      this.setState({ liked: false });
    } else {
      this.setState({ liked: true });
    }
  };
  render() {
    return (
      <FontAwesomeIcon
        className="btn"
        icon={this.state.liked ? fasFaHeart : farFaHeart}
        onClick={this.handleLike}
      />
    );
  }
}

export default LikeButton;
