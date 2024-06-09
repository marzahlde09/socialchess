import React, { useState } from "react";

function Board({}) {
  const [currentBoard, setCurrentBoard] = useState({
    id: 1,
    playerWhiteId: 1,
    playerBlackId: 2,
    turn: 1,
    pieces: [
      {
        type: "pawn",
        row: 2,
        col: 1,
        color: "white",
      },
      {
        type: "pawn",
        row: 2,
        col: 2,
        color: "white",
      },
      {
        type: "pawn",
        row: 2,
        col: 3,
        color: "white",
      },
      {
        type: "pawn",
        row: 2,
        col: 4,
        color: "white",
      },
      {
        type: "pawn",
        row: 2,
        col: 5,
        color: "white",
      },
      {
        type: "pawn",
        row: 2,
        col: 6,
        color: "white",
      },
      {
        type: "pawn",
        row: 2,
        col: 7,
        color: "white",
      },
      {
        type: "pawn",
        row: 2,
        col: 8,
        color: "white",
      },
      {
        type: "pawn",
        row: 7,
        col: 1,
        color: "black",
      },
      {
        type: "pawn",
        row: 7,
        col: 2,
        color: "black",
      },
      {
        type: "pawn",
        row: 7,
        col: 3,
        color: "black",
      },
      {
        type: "pawn",
        row: 7,
        col: 4,
        color: "black",
      },
      {
        type: "pawn",
        row: 7,
        col: 5,
        color: "black",
      },
      {
        type: "pawn",
        row: 7,
        col: 6,
        color: "black",
      },
      {
        type: "pawn",
        row: 7,
        col: 7,
        color: "black",
      },
      {
        type: "pawn",
        row: 7,
        col: 8,
        color: "black",
      },
      {
        type: "rook",
        row: 1,
        col: 1,
        color: "white",
        hasMoved: false,
      },
      {
        type: "rook",
        row: 1,
        col: 8,
        color: "white",
        hasMoved: false,
      },
      {
        type: "rook",
        row: 8,
        col: 1,
        color: "black",
        hasMoved: false,
      },
      {
        type: "rook",
        row: 8,
        col: 8,
        color: "black",
        hasMoved: false,
      },
      {
        type: "knight",
        row: 1,
        col: 2,
        color: "white",
      },
      {
        type: "knight",
        row: 1,
        col: 7,
        color: "white",
      },
      {
        type: "knight",
        row: 8,
        col: 2,
        color: "black",
      },
      {
        type: "knight",
        row: 8,
        col: 7,
        color: "black",
      },
      {
        type: "bishop",
        row: 1,
        col: 3,
        color: "white",
      },
      {
        type: "bishop",
        row: 1,
        col: 6,
        color: "white",
      },
      {
        type: "bishop",
        row: 8,
        col: 3,
        color: "black",
      },
      {
        type: "bishop",
        row: 8,
        col: 6,
        color: "black",
      },
      {
        type: "queen",
        row: 1,
        col: 4,
        color: "white",
      },
      {
        type: "queen",
        row: 8,
        col: 4,
        color: "black",
      },
      {
        type: "king",
        row: 1,
        col: 5,
        color: "white",
        hasMoved: false,
        //inCheck may or may not be necessary for the object to know
        inCheck: false,
      },
      {
        type: "king",
        row: 8,
        col: 5,
        color: "black",
        hasMoved: false,
        //inCheck may or may not be necessary for the object to know
        inCheck: false,
      },
    ],
  });

  return (
    <>
      <p>I'm a board!</p>
    </>
  );
}

export default Board;
