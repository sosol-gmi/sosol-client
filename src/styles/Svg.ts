import { styled } from "@mui/material/styles";
import { SVGProps } from "react";

interface SvgProps extends SVGProps<SVGSVGElement> {
  color?: string;
  loading?: boolean;
}

const Svg = styled("svg")<SvgProps>(({ theme, color, loading }) => ({
  fill: color ? color : theme.palette.primary.main,
  width: "16px",
  height: "16px",
  cursor: loading ? "not-allowed" : "pointer",
}));

export const DimmedSvg = styled("svg")<SvgProps>(({ theme, loading }) => ({
  fill: theme.palette.secondary.main,
  width: "16px",
  height: "16px",
  opacity: loading ? "0.5" : "1",
  cursor: loading ? "not-allowed" : "pointer",
  "&:hover path": {
    fill: theme.accentColor,
  },
}));

export default Svg;
