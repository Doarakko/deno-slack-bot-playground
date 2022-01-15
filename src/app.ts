// import "https://deno.land/x/dotenv@v2.0.0/load.ts";
import { App, LogLevel } from "https://deno.land/x/slack_bolt@1.0.0/mod.ts";

const app = new App({
  appToken: Deno.env.get("SLACK_APP_TOKEN"),
  token: Deno.env.get("SLACK_BOT_TOKEN"),
  socketMode: true,
  logLevel: LogLevel.DEBUG,
  convoStore: false,
});

app.message("hi", async ({ event, say }: { event: any; say: any }) => {
  console.log(event);
  await say("yeah");
});

app.event("message", async ({ event, say }: { event: any; say: any }) => {
  console.log(event);
  await say("ok");
});

app.event("app_mention", async ({ event, say }: { event: any; say: any }) => {
  console.log(event);
  await say("shut up");
});

await app.start({ port: 3000 });
console.log("🦕 ⚡️");
