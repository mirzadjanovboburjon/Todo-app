import React from "react";

const Card = ({ children, reverse }) => {
  //Conditional class styling
  //the card class always be there and changes
  //only if there is reverse prop passes in
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};

export default Card;
