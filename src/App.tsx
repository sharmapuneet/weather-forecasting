import React, { ReactElement } from "react";
import Sidebar from "./components/Sidebar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    maxWidth: "1024px"
  },
  leftContent: {
    background: "#cccccc"
  }
}));

function App(): ReactElement {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12} sm={8} className={classes.leftContent}>
          Left Content
        </Grid>
        <Grid item xs={12} sm={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
