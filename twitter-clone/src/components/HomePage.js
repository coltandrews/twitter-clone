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
  console.log(tweetData);
  const baseURL = "https://api.twitter.com/2";
  //** Component Logic
  useEffect(() => {
    // define the async function
    const getTweetData = async () => {
      try {
        const response = await fetch(`${baseURL}/tweets?id=1,2,3,4,5,6,7,8,9`);
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
        <Stack spacing={3} sx={{ marginTop: "50px" , marginBottom: '50px'}}>
          {tweetData.data.map((data) => {
            return <Tweet key={data.author_id} tweetData={data} />;
          })}
        </Stack>
      </Paper>
    </div>
  );
}
export default HomePage;
