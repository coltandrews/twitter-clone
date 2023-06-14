import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";
//** Setup (define helper functions and variables here)

function Tweet(props) {
  //** Destructure Props
  const { tweetData } = props;
  //** State Variables */
  const { userData, setUserData } = useState();
  const baseURL = "https://api.twitter.com/2";

  // useEffect(() => {
  //   // define the async function
  //   const getUserData = async () => {
  //     try {
  //       const response = await fetch(`${baseURL}/users/${tweetData.author_id}`);
  //       if (!response.ok) {
  //         throw new Error("Error with fetch request");
  //       }
  //       const result = await response.json(); // parse the response data
  //       setUserData(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   // invoke the async function
  //   getUserData();
  // }, []);
  const convertDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  //** Return JSX
  return (
    <div>
      <Card sx={{ minWidth: 275, width: 100 }}>
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {convertDate(tweetData.created_at)}
          </Typography>
          <Typography variant="body2">
            {tweetData.text}
            <br />
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
          <Button size="small">Retweet</Button>
          <Button size="small">Like</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default Tweet;
