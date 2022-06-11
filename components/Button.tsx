import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  button: {
    padding: theme.spacing[8],
    borderRadius: theme.borderRadius.lg,
    border: "none",
    // backgroundColor: theme.colors.background[500],
    background: `linear-gradient(135deg, ${theme.colors.background[600]}, ${theme.colors.background[700]})`,
    boxShadow: `6px 6px 12px rgba(0, 0, 0, 0.2), -6px -6px 12px rgba(253, 252, 235, 0.8),
                inset 0 0 0 2px ${theme.colors.background[500]},
                inset 0 0 0 6px ${theme.colors.background[700]},
                inset 0 0 0 8px ${theme.colors.background[500]},
                inset 0 0 2px 10px rgba(0, 0, 0, 0.2)`,
    cursor: "pointer",
    transition: "2s cubic-bezier(0.01, 0.98, 0.02, 0.99)",
    "&:hover": {
      "& $label": {
        color: "#ffffff",
        textShadow: "0 0 12px rgba(253, 252, 235, 0.8)",
      },
      boxShadow: `6px 6px 12px rgba(0, 0, 0, 0.2), -6px -6px 12px rgba(253, 252, 235, 0.8),
                  inset 0 0 0 2px ${theme.colors.background[500]},
                  inset 0 0 0 6px #ffffff,
                  inset 0 0 0 8px ${theme.colors.background[500]},
                  inset 0 0 2px 10px rgba(0, 0, 0, 0.2),
                  0 0 80px 30px rgba(253, 252, 235, 0.8),
                  inset 0 0 25px 4px rgba(253, 252, 235, 0.1)`,
      backgroundColor: theme.colors.orange[500],
      background: "linear-gradient(135deg, #ffca57, #e4a51c)",
    },
    "&:active": {
      "& $label": {
        color: "#000000",
        transform: "scale(0.95)",
      },
      boxShadow: `6px 6px 12px rgba(0, 0, 0, 0.2), -6px -6px 12px rgba(253, 252, 235, 0.8),
                  inset 0 0 0 2px ${theme.colors.background[500]},
                  inset 0 0 0 6px #ffca57,
                  inset 0 0 0 8px ${theme.colors.background[500]},
                  inset 0 0 2px 13px rgba(0, 0, 0, 0.2),
                  0 0 100px 6px #ffca57,
                  inset 0 0 25px 4px #ffca57`,
      backgroundColor: theme.colors.orange[500],
      background: "linear-gradient(135deg, #ffca57, #e9a81c)",
    },
  },
  label: {
    fontWeight: "bold",
    color: theme.colors.background[800],
    textTransform: "uppercase",
    fontSize: theme.fontSize.base,
    transition: "2s cubic-bezier(0.01, 0.98, 0.02, 0.99)",
    display: "inline-block",
  },
}));

interface ButtonProps {
  children?: any;
  url?: string;
}

export function Button({ children, ...props }: ButtonProps) {
  const classes = useStyles();

  return (
    <button className={classes.button}>
      <span className={classes.label}>{children}</span>
    </button>
  );
}
