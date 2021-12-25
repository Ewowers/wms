export class WmsDto {
  bbox: string;
  styles: string | null | undefined;
  format: string;
  service: string;
  version: string;
  request: string;
  src: string;
  srs: string;
  transparent: boolean;
  windth: number;
  height: number;
  TILDET: boolean;
  layers: string;
}
export class WmsFindDto {
  request: string;
}
