import React, { ReactElement, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { chartColors } from "./colors";
import { RampsContext, Ramps } from "../../context/RampsContext";

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
    padding: `${theme.spacing()}px 0`,
    height: "200px"
  }
}));

/**
 * Function to get the percentage of ramp data.
 *
 * @param ramps array of ramp data from context.
 * @returns Array of ramp data in percentage.
 */
const getRampPercent = (ramps: Ramps[]) => {
  if (ramps.length === 1) {
    return [];
  }

  const percents = Object.entries(
    ramps.reduce(
      (result: { [key: string]: number } = {}, item) => (
        (result[item.algorithm] = (result[item.algorithm] || 0) + 1), result
      ),
      {}
    )
  ).map(([_i, count]) => (count * 100) / ramps.length);

  return percents;
};

const BottomContent = (): ReactElement => {
  const classes = useStyles();
  const ramps = useContext(RampsContext);

  // chartJs option configuration.
  const options = {
    plugins: {
      labels: {
        render: "percentage",
        fontColor: "#38B4AA",
        precision: 0,
        position: "outside",
        textMargin: 8,
        fontSize: 14
      }
    },
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    tooltips: {
      enabled: false
    },
    legend: {
      display: false,
      legend: { align: "right" as const }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };

  // chartJs data configuration.
  const data = {
    responsive: true,
    datasets: [
      {
        data: getRampPercent(ramps),
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandLessIcon className={classes.fadedText} fontSize="large" />}
          classes={{ content: classes.accordionRoot }}>
          <Typography variant="h6" component="p" className={classes.fadedText}>
            RAMP CHART
          </Typography>
        </AccordionSummary>
        <Divider variant="fullWidth" className={classes.divider} />
        <AccordionDetails classes={{ root: classes.accordionDetailsRoot }}>
          <Doughnut data={data} options={options} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BottomContent;
