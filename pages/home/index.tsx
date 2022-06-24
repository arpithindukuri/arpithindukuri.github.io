import { createUseStyles } from "react-jss";
import Button from "../../components/Button";
import Image from "../../components/Image";

import pic from "../../public/todo-mobile-app-figma.png";

export const useStyles = createUseStyles((theme) => ({
  main: {
    backgroundColor: theme.colors.lightBackground[500],
    padding: theme.spacing[12],
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100vh",
    minHeight: "100vh",
    overflow: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  buttonContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing[6],
    borderRadius: theme.borderRadius.lg,
    border: `2px solid ${theme.colors.lightBackground[600]}`,
    // boxShadow: `${theme.neuShadow.indentedSm}, ${theme.neuShadow.simpleBorder}`,
    // backgroundColor: `${theme.colors.lightBackground[600]}`,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Image img={pic.src} height={pic.height} width={pic.width} />
      <div className={classes.buttonContainer}>
        <h2>LINKS</h2>
        <Button fullWidth>Home</Button>
        <Button fullWidth>Portfolio</Button>
        <Button fullWidth>Contact</Button>
        <Button fullWidth>Resume</Button>
        <Button fullWidth>About</Button>
      </div>
    </div>
  );
}
