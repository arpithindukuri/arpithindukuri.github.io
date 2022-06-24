import { createUseStyles } from "react-jss";
import Button from "./Button";

const useStyles = createUseStyles((theme) => ({
  main: {
    width: "100%",
    height: "100vh",
  },
  navBarWrapper: {
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 999,
    // height: theme.spacing[22],
    width: "100%",
    overflowX: "auto",
    overflowY: "visible",
    boxShadow: `${theme.neuShadow.raised}`,
  },
  navBar: {
    padding: theme.spacing[2],
    display: "flex",
    minWidth: "100%",
    width: "fit-content",
    background: `${theme.neuBG.convex.lightBackground}`,
    boxShadow: `${theme.neuShadow.simpleBorder}`,
    // justifyContent: "center",
    alignItems: "center",
  },
  spacer: {
    width: "100%",
  },
  body: {
    overflow: "auto",
  },
}));

export default function Layout({ children }: { children?: any }) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.navBarWrapper}>
        <div className={classes.navBar}>
          <div className={classes.spacer} />
          <Button isOn>Home</Button>
          <Button>Portfolio</Button>
          <Button>Resume</Button>
          <Button>About</Button>
          <div className={classes.spacer} />
        </div>
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  );
}
