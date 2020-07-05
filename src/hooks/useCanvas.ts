import { useRef } from "react";

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return [canvasRef];
};
