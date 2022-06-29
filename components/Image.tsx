import Image from "next/image";
import { useState } from "react";
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
    cursor: "pointer",
    transition: `${theme.bezier.button}`,
  },
  shadow: (props: StyleProps) => ({
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
    backgroundColor: props.isHovered ? "#33333333" : undefined,
    pointerEvents: "none",
    transition: "0.3s",
  }),
  overlay: {
    width: "100%",
    height: "100%",
    display: "flex",
    boxSizing: "border-box",
    borderRadius: theme.borderRadius.lg,
    pointerEvents: "none",
    justifyContent: "center",
    alignItems: "center",
    color: "#33333333",
    fontSize: "8rem",
    animation: "0.3s 0s 1 $grow",
  },
  "@keyframes grow": {
    "0%": { opacity: 0, transform: "scale(90%)" },
    "100%": { opacity: 1, transform: "scale(100%)" },
  },
}));

interface ImageProps {
  children?: any;
  img: string;
  height: number;
  width: number;
}

interface StyleProps {
  isHovered: boolean;
}

export default function MyImage({ children, ...props }: ImageProps) {
  const [isHovered, setIsHovered] = useState(true);
  const classes = useStyles({ isHovered });

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div className={classes.container}>
      <Image
        className={classes.img}
        src={props.img}
        width={props.width}
        height={props.height}
        layout={"intrinsic"}
        objectFit={"cover"}
        quality={100}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className={classes.shadow}>
        {isHovered && <div className={classes.overlay}>⤢</div>}
      </div>
    </div>
  );
}
