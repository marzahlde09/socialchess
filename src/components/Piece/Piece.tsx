import React from "react";
import blackQueen from "../../images/black-queen.webp";
import whiteQueen from "../../images/white-queen.webp";

type Props = {
  type?: string;
  color: string;
};

export function GenericPiece(props: Props) {
  return (
    <>
      <p>
        I'm a {props.color} {props.type}!
      </p>
    </>
  );
}

export function Queen(props: Props) {
  return (
    <>
      {props.color === "white" ? (
        <img src={whiteQueen} />
      ) : (
        <img src={blackQueen} />
      )}
    </>
  );
}
