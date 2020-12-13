import React, { useEffect } from "react";
import { useCanvas } from "hooks";
/** @jsx jsx */ import { jsx, css } from "@emotion/core";


const Canvas: React.FC = () => {
  const [ref] = useCanvas();

  const handleClick = () => {
    const imageDataUrl: string = ref.current!.toDataURL("image/png");

    const link: HTMLAnchorElement = document.createElement('a');
    link.download = "doodlr.png";
    link.href = imageDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  });

  return (
    <>
    <canvas ref={ref} style={{ width: "100%", height: "100%" }} />
    <button onClick={handleClick}>to image</button>
    </>
  );
};

export default Canvas;
