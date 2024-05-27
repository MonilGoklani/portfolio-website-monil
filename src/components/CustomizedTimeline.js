import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    background: "#f0f1f4",
    ["@media (max-width:480px)"]: {
      // eslint-disable-line no-useless-computed-key
      padding: "3px 8px",
    },
  },

  year: {
    color: "white",
    marginTop: "1rem",
    ["@media (max-width:480px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.8rem",
    },
  },

  timelineContent: {
    width: "50vw",
  },

  timelineDot: {
    color: "#f0f1f4",
    background: "#b100e8",
  },

  eventTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    fontFamily: "Playfair Display",
    ["@media (max-width:480px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.8rem",
    },
  },

  eventDescription: {
    fontSize: "0.8rem",
    ["@media (max-width:480px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.6rem",
    },
  },

  icon: {
    fontSize: "2.2rem",
    ["@media (max-width:480px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "1.5rem",
    },
  },

  oppositeItem: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'center',
  },
  connector: {
    height: "3rem",
  },
  timeline: {
    ["@media (max-width:480px)"]: {
      // eslint-disable-line no-useless-computed-key
      padding: "5px",
    },
  },
  timelineItem: {
    ["@media (max-width:480px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "95vw",
    },
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate" className={classes.timeline}>
      <TimelineItem className={classes.timelineItem}>
        <TimelineOppositeContent className={classes.oppositeItem}>
          <Typography className={classes.year}>2007 - 2010</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDot}>
            <SchoolIcon className={classes.icon} />
          </TimelineDot>
          <TimelineConnector className={classes.connector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.eventTitle}>
              Purdue University
            </Typography>
            <Typography className={classes.eventDescription}>
              {" "}
              Bachelors in Electrical Engineering{" "}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeItem}>
          <Typography className={classes.year}>2011 - 2014</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDot}>
            <WorkIcon className={classes.icon} />
          </TimelineDot>
          <TimelineConnector className={classes.connector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.eventTitle}>Cummins</Typography>
            <Typography className={classes.eventDescription}>
              {" "}
              Controls Software Validation Engineer
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeItem}>
          <Typography className={classes.year}>2014 - 2018</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDot}>
            <WorkIcon className={classes.icon} />
          </TimelineDot>
          <TimelineConnector className={classes.connector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.eventTitle}>Cummins</Typography>
            <Typography className={classes.eventDescription}>
              {" "}
              Controls Software - SDLC Manager
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeItem}>
          <Typography className={classes.year}>2013 - 2016</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDot}>
            <SchoolIcon className={classes.icon} />
          </TimelineDot>
          <TimelineConnector className={classes.connector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.eventTitle}>
              Kelly School Of Business
            </Typography>
            <Typography className={classes.eventDescription}>
              {" "}
              Masters in Business Administration
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeItem}>
          <Typography className={classes.year}>2018 - Current</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDot}>
            <WorkIcon className={classes.icon} />
          </TimelineDot>
          <TimelineConnector className={classes.connector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.eventTitle}>Cummins</Typography>
            <Typography className={classes.eventDescription}>
              {" "}
              Digital Solutions Engineer (UI/UX)
            </Typography>
            {/* <Typography className={classes.eventDescription}>
              {" "}
              *Current{" "}
            </Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeItem}>
          <Typography className={classes.year}>2021 - 2021</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDot}>
            <SchoolIcon className={classes.icon} />
          </TimelineDot>
          <TimelineConnector className={classes.connector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.eventTitle}>
              Fullstack Academy
            </Typography>
            <Typography className={classes.eventDescription}>
              {" "}
              Software Engineering - Web Development{" "}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeItem}>
          <Typography className={classes.year}>2021 - 2023</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineDot}>
            <WorkIcon className={classes.icon} />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.eventTitle}>Scene Health</Typography>
            <Typography className={classes.eventDescription}>
              {" "}
              Full Stack Developer | Frontend UI Specialist{" "}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
