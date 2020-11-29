interface Coordinate {
  x: number;
  y: number;
}

export interface Part {
  getHeight(): number;
  getWidth(): number;
  getCoordinate(): Coordinate;
}
