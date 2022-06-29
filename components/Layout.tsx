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
    // background: `${theme.neuBG.convex.lightBackground}`,
    background: "#edfadd33",
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.27 )",
    backdropFilter: "blur( 4px )",
    webkitBackdropFilter: "blur( 4px )",
    border: "3px solid rgba( 255, 255, 255, 0.4 )",
    boxShadow: `${theme.neuShadow.indentedSm}, ${theme.neuShadow.simpleBorder}`,
    // justifyContent: "center",
    alignItems: "center",
  },
  spacer: {
    width: "100%",
  },
  body: {
    overflow: "auto",
  },
  githubIcon: {},
  "button&:hover .githubIcon": {
    fill: "red",
  },
}));

export default function Layout({ children }: { children?: any }) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.navBarWrapper}>
        <div className={classes.navBar}>
          <Button isOn>Home</Button>
          <Button>Portfolio</Button>
          <Button>Resume</Button>
          <Button>About</Button>
          <div className={classes.spacer} />
          <Button round arrow={false}>
            ✉
          </Button>
          <Button round arrow={false}>
            <img
              className="githubIcon"
              src={"Octicons-mark-github.svg"}
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  );
}
