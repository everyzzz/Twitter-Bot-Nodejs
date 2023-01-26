// import { config } from "dotenv";
// import { TwitterApi } from "twitter-api-v2";

// config();

// const twitterClient = new TwitterApi({
//   appKey: process.env.TWITTER_CUSTOMER_KEY,
//   appSecret: process.env.TWITTER_CUSTOMER_SECRET,
//   accessToken: process.env.TWITTER_ACCESS_TOKEN,
//   accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// });

// const rwClient = twitterClient.readWrite;

// const main = async () => {
//   await rwClient.v2
//     .tweet("Hello World!")
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// main();


import  Twit  from "twit"
import { config } from "dotenv";

config();

const T = new Twit({
  consumer_key: process.env.TWITTER_CUSTOMER_KEY,
  consumer_secret: process.env.TWITTER_CUSTOMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

T.post('statuses/update', { status: 'Hello, world!' }, function(err, data, response) {
  console.log(data)
});