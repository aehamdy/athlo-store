"use client";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Celebration() {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={250}
      gravity={0.18}
    />
  );
}
export default Celebration;
