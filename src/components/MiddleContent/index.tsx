import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import MiddleContentItem from "../MiddleContentItem";
import mockData from "../../__mocks__/mockData";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  whiteText: {
    color: theme.palette.background.paper
  },
  fadedText: {
    color: theme.palette.grey[400]
  },
  accordionRoot: {
    "&.Mui-expanded": {
      margin: 0
    }
  },
  accordion: {
    backgroundColor: "#161E27"
  },
  divider: {
    backgroundColor: "#27323f"
  },
  accordionDetailsRoot: {
    padding: `${theme.spacing()}px 0`
  }
}));

const MiddleContent = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandLessIcon className={classes.fadedText} fontSize="large" />}
          classes={{ content: classes.accordionRoot }}>
          <Typography variant="h6" component="p" className={classes.fadedText}>
            DELAYED ROUTES
          </Typography>
        </AccordionSummary>
        <Divider variant="fullWidth" className={classes.divider} />
        <AccordionDetails classes={{ root: classes.accordionDetailsRoot }}>
          <MiddleContentItem delayedRoutes={mockData.delayedRoutes} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MiddleContent;
