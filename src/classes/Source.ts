interface Coordinate {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

interface SVGAttribute {
  readonly fill?: string;
  readonly d?: string;
  readonly transform?: string;
}

export interface Source {
  readonly group: SVGAttribute;
  readonly paths: SVGAttribute[];
}
