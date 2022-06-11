import { createUseStyles } from "react-jss";
import { Button } from "../../components/Button";

export const useStyles = createUseStyles((theme) => ({
  main: {
    backgroundColor: theme.colors.background[500],
    padding: theme.spacing[12],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <h1>See My Work</h1>
      <Button>Projects &nbsp;❯</Button>
    </div>
  );
}
