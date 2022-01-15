# deno-slack-bot-playground

## Requirements

- deno
- Slack

## Usage

### 1. Create Slack App using `manifest.yml`

### 2. make `.env`

```sh
cp .env.example .env
```

Enter your Slack token to `.env`.

```txt
SLACK_APP_TOKEN=xapp-aaaa
SLACK_BOT_TOKEN=xoxb-bbbb
```

### 3. Uncomment `dotenv` from `src/app.ts`

```typescript
import "https://deno.land/x/dotenv@v2.0.0/load.ts";
import { App, LogLevel } from "https://deno.land/x/slack_bolt@1.0.0/mod.ts";

const app = new App({
...
```


### 4. Run

```sh
deno run --no-check=remote --allow-read --allow-env --allow-net src/app.ts
```
