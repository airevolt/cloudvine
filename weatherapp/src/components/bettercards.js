import React from "react";
import Color from "color";
import GoogleFont from "react-google-font-loader";
import { makeStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";

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
  

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    maxWidth: 200,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Sans-serif",
    fontSize: "1.2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Arial",
    color: "#fff",
    opacity: 0.87,
    marginTop: "1.5rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle, handleActivity }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card} onClick={handleActivity}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard({weather, handleActivity}) {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#34a8cf" });

  return (
    <>
      <Grid classes={gridStyles} container spacing={2} wrap={"nowrap"}>
        {weather.map((day) => (
            <Grid item xs={12} s={6} m={4}>
          <CustomCard 
              xs={12} s={6} m={4}
              handleActivity={() => handleActivity(day)} 
              classes={styles}
              title= {day.weather[0].description}
              subtitle={timeConverter(day.dt)}
              image={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
        </Grid>
      ))}
     
      </Grid>
    </>
  );
});
export default SolidGameCardDemo;
