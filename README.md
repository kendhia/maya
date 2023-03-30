# Maya 🐈
This a personal Telegram bot I created for easy (and cheap) access to ChatGPT. It is using `gpt-3.5-turbo-0301`, but you can choose whatever modal you want in `src/index.ts`.

In order to use this project you have to:

0. Signup to [openai.com/](https://openai.com/).
1. create a Telegram bot. See [official documentation](https://core.telegram.org/bots), and [simple serverless lambda example](https://github.com/feathers-studio/telegraf-docs/tree/master/examples/functions/aws-lambda).
2. create an [AWS account](https://aws.amazon.com/).

## How to run it?
0. run `yarn`
1. run `cp .env.example .env`
2. Paste your openai key to `OPENAI_API_KEY=`. You can find your [token here](https://platform.openai.com/account/api-keys).
3. Paste your Telegram token you got when you created the bot via `BotFather` to `TELEGRAM_BOT_TOKEN=`
4. Add your AWS Profile to the `AWS_PROFILE=<profile-name>`, or just login to your aws account via `aws sso`.
5. run `yarn serverless`
6. After previous command ends successfully, you should be able to see the url for your deployed lambda.

Use the Lambda's URL and Bot token in following command to set up your bot's webhook: 

`curl --request POST --url https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>>/setWebhook --header 'content-type: application/json' --data '{"url": "<URL_OF_LAMBDA>"}'`


🎉 you have access to ChatGPT via your personal Telegram bot now 🎉


## TODOs
1. add config command for providing an `OPENAI_API_TOKEN`
2. add config command for changing the used `modal`
3. add config command for changing `role` of `model`.
