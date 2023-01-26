import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import  { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";

config();

const appKey: any = process.env.TWITTER_CUSTOMER_KEY
const appSecret: any = process.env.TWITTER_CUSTOMER_SECRET
const accessToken: any = process.env.TWITTER_ACCESS_TOKEN
const accessSecret: any  = process.env.TWITTER_ACCESS_TOKEN_SECRET

const twitterClient = new TwitterApi({
  appKey: appKey,
  appSecret: appSecret,
  accessToken: accessToken,
  accessSecret: accessSecret
});

const twitt = "Hello World!"
const rwClient = twitterClient.readWrite;

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  await rwClient.v2
    .tweet(twitt)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, message: twitt }),
  };
};
export { handler };