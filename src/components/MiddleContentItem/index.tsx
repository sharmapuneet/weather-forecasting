import React, { ReactElement } from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import Grid from "@material-ui/core/Grid";

// Type defination for middle content.
interface MiddleContentItemProps {
  type: string;
  title: string;
  road: string;
  mainRoad: string;
  distance: string;
  time: string;
  timeSuffix: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  container: {
    padding: `${theme.spacing()}px ${theme.spacing(2)}px`
  },
  redType: {
    color: "red"
  },
  yellowType: {
    color: "yellow"
  },
  inline: {
    display: "inline-flex"
  },
  whiteText: {
    color: theme.palette.background.paper
  },
  fadedText: {
    color: theme.palette.grey[400]
  },
  darkGreyText: {
    color: "#5e646d"
  },
  arrowIcon: {
    transform: "rotate(90deg)",
    height: "auto",
    color: "#5e646d",
    marginLeft: "-3px"
  },
  divider: {
    backgroundColor: "#27323f"
  },
  time: {
    paddingTop: theme.spacing(2.125)
  },
  timeSuffix: {
    paddingTop: theme.spacing(1 / 2)
  },
  innerText: {
    paddingLeft: theme.spacing(0.75)
  },
  dotIcon: {
    paddingTop: theme.spacing(0.125)
  },
  distance: {
    paddingTop: theme.spacing(1 / 2)
  }
}));

const MiddleContentItem = (props: { delayedRoutes: MiddleContentItemProps[] }): ReactElement => {
  const classes = useStyles();
  const { delayedRoutes } = props;

  return (
    <div className={classes.root}>
      {delayedRoutes.map((route, index) => {
        const styles = route.type === "red" ? classes.redType : classes.yellowType;

        return (
          <div key={route.type + index}>
            <div className={classes.container}>
              <Grid item container xs={12} justify="space-between">
                <Grid item className={classes.inline}>
                  <FiberManualRecordIcon
                    className={clsx(styles, classes.dotIcon)}
                    data-testid="test-dotIcon"
                    fontSize="small"
                  />
                  <Typography
                    variant="body1"
                    className={clsx(classes.fadedText, classes.innerText)}>
                    {route.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    className={clsx(classes.darkGreyText, classes.distance)}>
                    {route.distance}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} justify="space-between">
                <Grid item className={classes.fadedText}>
                  <div className={classes.inline}>
                    <TrendingFlatIcon className={classes.arrowIcon} data-testid="test-arrowIcon" />
                    <div className={clsx(classes.fadedText, classes.innerText)}>
                      <Typography variant="body2" className={classes.darkGreyText}>
                        {route.mainRoad}
                      </Typography>
                      <Typography variant="body2" className={classes.darkGreyText}>
                        {route.road}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item className={classes.time}>
                  <Typography
                    variant="subtitle1"
                    className={clsx(classes.whiteText, classes.inline)}>
                    {route.time}
                    <Typography
                      className={clsx(classes.fadedText, classes.timeSuffix)}
                      variant="body2">
                      {route.timeSuffix}
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </div>
            {!(index === delayedRoutes.length - 1) && (
              <Divider variant="fullWidth" className={classes.divider} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MiddleContentItem;
