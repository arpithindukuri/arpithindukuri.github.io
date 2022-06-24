import Image from "next/image";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    position: "relative",
    padding: theme.spacing[4],
    boxSizing: "border-box",
  },
  img: {
    borderRadius: theme.borderRadius.lg,
    position: "relative",
    boxSizing: "border-box",
  },
  shadow: {
    zIndex: 2,
    content: '""',
    position: "absolute",
    top: theme.spacing[4],
    left: theme.spacing[4],
    right: theme.spacing[4],
    bottom: theme.spacing[4],
    borderRadius: theme.borderRadius.lg,
    display: "flex",
    boxSizing: "border-box",
    boxShadow: `${theme.neuShadow.indentedSm}, ${theme.neuShadow.simpleBorder}`,
  },
  "@keyframes flicker": {
    "0%": {
      opacity: 0.27861,
    },
    "5%": {
      opacity: 0.34769,
    },
    "10%": {
      opacity: 0.23604,
    },
    "15%": {
      opacity: 0.90626,
    },
    "20%": {
      opacity: 0.18128,
    },
    "25%": {
      opacity: 0.83891,
    },
    "30%": {
      opacity: 0.65583,
    },
    "35%": {
      opacity: 0.67807,
    },
    "40%": {
      opacity: 0.26559,
    },
    "45%": {
      opacity: 0.84693,
    },
    "50%": {
      opacity: 0.96019,
    },
    "55%": {
      opacity: 0.08594,
    },
    "60%": {
      opacity: 0.20313,
    },
    "65%": {
      opacity: 0.71988,
    },
    "70%": {
      opacity: 0.53455,
    },
    "75%": {
      opacity: 0.37288,
    },
    "80%": {
      opacity: 0.71428,
    },
    "85%": {
      opacity: 0.70419,
    },
    "90%": {
      opacity: 0.7003,
    },
    "95%": {
      opacity: 0.36108,
    },
    "100%": {
      opacity: 0.24387,
    },
  },
  crt: {
    "&:before": {
      content: '" "',
      display: "block",
      position: "absolute",
      top: theme.spacing[5],
      left: theme.spacing[5],
      right: theme.spacing[5],
      bottom: theme.spacing[5],
      borderRadius: theme.borderRadius.lg,
      background:
        "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.02) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
      zIndex: 2,
      backgroundSize: "100% 2px, 3px 100%",
      pointerEvents: "none",
    },
    "&:after": {
      content: '" "',
      display: "block",
      position: "absolute",
      top: theme.spacing[5],
      left: theme.spacing[5],
      right: theme.spacing[5],
      bottom: theme.spacing[5],
      borderRadius: theme.borderRadius.lg,
      background: "rgba(18, 16, 16, 0.04)",
      opacity: 0,
      zIndex: 2,
      pointerEvents: "none",
      animation: "$flicker 1.55s infinite",
    },
  },
}));

interface ImageProps {
  children?: any;
  img: string;
  height: number;
  width: number;
}

export default function MyImage({ children, ...props }: ImageProps) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Image
        className={classes.img}
        src={props.img}
        width={props.width}
        height={props.height}
        quality={100}
      />
      <div className={classes.shadow} />
      <div className={classes.crt} />
    </div>
  );
}
