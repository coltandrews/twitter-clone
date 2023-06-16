//** Import Statements
import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import Stack from "@mui/material/Stack";

import Paper from "@mui/material/Paper";

//** Setup (define helper functions and variables here)

function HomePage(props) {
  //** Destructure Props
  const {} = props;

  //** State Variables
  const [tweetData, setTweetData] = useState();
  const [userData, setUserData] = useState();
  const baseURL = "https://api.twitter.com";
  //** Component Logic
  useEffect(() => {
    // define the async function
    const getTweetData = async () => {
      try {
        const response = await fetch(`${baseURL}/2/tweets?id=1,2,3,4,5`);
        if (!response.ok) {
          throw new Error("Error with fetch request");
        }
        const result = await response.json(); // parse the response data
        setTweetData(result);
      } catch (err) {
        console.log(err);
      }
    };
    // invoke the async function
    getTweetData();
  }, []);

  useEffect(() => {
    // define the async function
    const getUserData = async () => {
      try {
        const response = await fetch(
          `${baseURL}/2/users/${tweetData.author_id}`
        );
        if (!response.ok) {
          throw new Error("Error with fetch request");
        }
        const result = await response.json(); // parse the response data
        setUserData(result);
      } catch (err) {
        console.log(err);
      }
    };
    // invoke the async function
    getUserData();
  }, [tweetData]);

  const loopTweets = (tweetData) => {
    let content = [];
    for (let i = 0; i < 5; i++) {
      content.push(<WeatherCard key={i} tweetData={data} index={tweetData.author_id} />);
    }
    return content;
  };
  //** Return JSX
  if (!tweetData) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "gray",
        }}
      >
        <Stack spacing={3} sx={{ marginTop: "50px", marginBottom: "50px" }}>
          {tweetData.data.map((element) => {
            return <Tweet key={element.author_id} tweetData={element} />;
          })}
        </Stack>
      </Paper>
    </div>
  );
}
export default HomePage;
