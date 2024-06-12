import React, { useEffect, useState } from "react";
import "./Piece.css";

type Props = {
  type: string;
  color: string;
};

function Piece(props: Props) {
  const [isActive, setIsActive] = useState(false);
  const [className, setClassName] = useState(
    `${props.color}-${props.type}-${isActive ? "active" : "inactive"}`
  );

  const selectPiece = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setClassName(
      `${props.color}-${props.type}-${isActive ? "active" : "inactive"}`
    );
  }, [isActive]);

  return (
    <>
      <button className={className} onClick={selectPiece}></button>
    </>
  );
}

export default Piece;
