import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./cards";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export class Daycards extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <MediaCard data={this.props.weather} fx={this.props.handleActivity} />
        </Grid>
      </div>
    );
  }
}

export default Daycards;
