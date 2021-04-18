import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopContent from "../TopContent";
import MiddleContent from "../MiddleContent";
import BottomContent from "../BottomContent";
import { RampsProvider } from "../../context/RampsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(2)
  },
  componentSpacing: {
    paddingTop: theme.spacing(4)
  }
}));

const Sidebar = (): ReactElement => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <TopContent />
      </Grid>
      <Grid item xs={12} className={classes.componentSpacing}>
        <MiddleContent />
      </Grid>
      <Grid item xs={12} className={classes.componentSpacing}>
        <RampsProvider>
          <BottomContent />
        </RampsProvider>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
