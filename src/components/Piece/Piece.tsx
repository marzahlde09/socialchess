import React from "react";

type Props = {
  type: string;
  color: string;
};

function Piece(props: Props) {
  return (
    <>
      <p>
        I'm a {props.color} {props.type}!
      </p>
    </>
  );
}

export default Piece;
