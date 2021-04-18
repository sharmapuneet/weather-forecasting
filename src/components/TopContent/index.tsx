import React, { ReactElement } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import mockData from "../../__mocks__/mockData";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(2)
  },
  whiteText: {
    color: theme.palette.background.paper
  },
  fadedText: {
    color: "#5e646d"
  },
  weatherIcon: {
    color: theme.palette.background.paper,
    width: "100%",
    height: "auto",
    marginTop: theme.spacing(),
    [theme.breakpoints.only("xs")]: {
      marginTop: `-${theme.spacing(1.25)}px`
    }
  },
  sunIcon: {
    fontSize: "16px",
    verticalAlign: "text-top",
    paddingLeft: "4px"
  },
  cellRoot: {
    border: "none",
    padding: `1px 3px`
  },
  leftContent: {
    padding: `${theme.spacing(2)}px 0`
  },
  table: {
    paddingTop: 0
  }
}));

const TopContent = (): ReactElement => {
  const classes = useStyles();
  const { tableData } = mockData;

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={7} className={classes.leftContent}>
        <Typography variant="body1" className={classes.fadedText}>
          Melbourne
        </Typography>
        <Typography variant="h4" component="p" className={classes.whiteText}>
          32°
        </Typography>
        <Typography variant="body1" className={classes.fadedText}>
          Tue 13th 3:46 PM
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <CloudOutlinedIcon className={classes.weatherIcon} data-testid="test-cloudIcon" />
      </Grid>
      <Grid item xs={12} className={classes.table}>
        <Table>
          <TableBody>
            {tableData.map((item, index) => {
              return (
                <TableRow key={item.name + index}>
                  <TableCell classes={{ root: classes.cellRoot }}>
                    <Typography variant="body1" className={classes.fadedText}>
                      {item.name}
                    </Typography>
                  </TableCell>
                  <TableCell classes={{ root: classes.cellRoot }}>
                    <Typography variant="body1" className={classes.whiteText}>
                      {item.description}
                      {index === tableData.length - 1 && (
                        <WbSunnyOutlinedIcon
                          className={classes.sunIcon}
                          data-testid="test-sunIcon"
                        />
                      )}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default TopContent;
