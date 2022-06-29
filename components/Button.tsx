import { CSSProperties, useEffect, useState } from "react";
import { createUseStyles, DefaultTheme } from "react-jss";
import { theme } from "../styles/Theme";

export const useStyles = createUseStyles((theme) => ({
  wrapper: {
    padding: theme.spacing[2],
  },
  button: (props: ButtonProps) => ({
    padding: `${theme.spacing[4]} ${theme.spacing[4]}`,
    borderRadius: props.round ? theme.borderRadius.full : theme.borderRadius.sm,
    border: "none",
    background: props.isOn
      ? `${theme.neuBG.convex.orange}`
      : `${theme.neuBG.convex.lightBackground}`,
    boxShadow: props.isOn
      ? `${theme.neuShadow.raisedXs}, ${theme.neuShadow.lightUpBorderHover}`
      : `${theme.neuShadow.raisedXs}, ${theme.neuShadow.lightUpBorder}`,
    cursor: "pointer",
    transition: `${theme.bezier.button}`,
    WebkitTapHighlightColor: "transparent",
    "&:hover, &:focus": {
      "& $labelWrapper": {
        color: "#ffffff",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
      },
      boxShadow: `${theme.neuShadow.raisedXs}, ${theme.neuShadow.lightUpBorderHover}`,
      background: `${theme.neuBG.convex.orange}`,
    },
    "&:hover .githubIcon.path": {
      fill: "#ffffff",
    },
    "&:active": {
      "& $labelWrapper": {
        color: "#ffffff",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
        transform: "scale(0.95)",
      },
      boxShadow: `${theme.neuShadow.raisedXs}, ${theme.neuShadow.lightUpBorderActive}`,
      background: `${theme.neuBG.convex.orange}`,
    },
  }),
  labelWrapper: (props: ButtonProps) => ({
    display: "flex",
    width: "100%",
    height: "100%",
    fontWeight: "bold",
    color: props.isOn ? "#ffffff" : theme.colors.lightBackground[800],
    textShadow: props.isOn
      ? "0 0 10px rgba(255, 255, 255, 0.6)"
      : `0 0 15px ${theme.colors.lightBackground[600]}`,
    transition: `${theme.bezier.button}`,
    textTransform: "uppercase",
    whiteSpace: "pre",
    fontSize: theme.fontSize.lg,
    lineHeight: theme.lineHeight.none,
    letterSpacing: theme.spacing.px,
    fontFamily: "LCDM2U",
    verticalAlign: "center",
  }),
  label: {
    width: "100%",
    textAlign: "start",
  },
  arrow: {},
}));

interface ButtonProps {
  children?: any;
  url?: string;
  arrow?: boolean;
  style?: CSSProperties;
  fullWidth?: boolean;
  isOn?: boolean;
  round?: boolean;
}

export default function Button({
  children,
  arrow = true,
  fullWidth = false,
  isOn = false,
  round = false,
  ...props
}: ButtonProps) {
  const classes = useStyles({ isOn, round, theme });

  const [suffix, setSuffix] = useState(" ❯ ");
  const [isHovered, setIsHovered] = useState(false);

  function updateSuffix(str: string) {
    const result =
      str.substring(str.length - 1, str.length) +
      str.substring(0, str.length - 1);

    return result;
  }

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(
        () => setSuffix((prev) => updateSuffix(prev)),
        250
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    setSuffix(" ❯ ");
  }

  return (
    <div
      className={classes.wrapper}
      style={{
        width: fullWidth === true ? "100%" : undefined,
      }}
    >
      <button
        className={classes.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...props.style,
          width: fullWidth === true ? "100%" : undefined,
        }}
      >
        <span className={classes.labelWrapper}>
          <span className={classes.label}>{children}</span>
          <span className={classes.arrow}>{arrow && ` ${suffix}`}</span>
        </span>
      </button>
    </div>
  );
}
