import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  actionArea:{
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
  }
}
});
function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();

  var time = date + " " + month + " " + year;
  return time;
}

export default function MediaCard({ data, fx }) {
  const classes = useStyles();
  return (
    <React.Fragment > 
      {data.map((day) => (
            <Grid item xs>
          <Card onClick={() => fx(day)} classes={useStyles}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {day.weather[0].description}
                </Typography>
                <Typography component="p">{timeConverter(day.dt)}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
        </Grid>
      ))}
    </React.Fragment>
  );
}
