import  Twit  from "twit"
import { config } from "dotenv";
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

config();

const appKey: any = process.env.TWITTER_CUSTOMER_KEY
const appSecret: any = process.env.TWITTER_CUSTOMER_SECRET
const accessToken: any = process.env.ACCESS_TOKEN_BOT
const accessSecret: any  = process.env.TOKEN_SECRET_BOT

const twitt = "Hello World!!"

const T = new Twit({
  consumer_key: appKey,
  consumer_secret: appSecret ,
  access_token: accessToken,
  access_token_secret: accessSecret
});

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
	await T.post('statuses/update', { status: twitt }, function (err, data, response) {
		console.log(data)
	 });	
	return {
	  statusCode: 200,
	  body: JSON.stringify({ ok: true, message: twitt }),
	};
 };
 export { handler };