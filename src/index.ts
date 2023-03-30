import * as http from "serverless-http";

import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!botToken || !openaiApiKey) {
  throw new Error("Bot token and OpenAI API key are required");
}

const configuration = new Configuration({
  apiKey: openaiApiKey,
});

const openai = new OpenAIApi(configuration);
const bot = new Telegraf(botToken);

const keyboard = Markup.inlineKeyboard([
  Markup.button.url("❤️", "https://kendhia.me"),
]);

bot.on(message("text"), async (ctx) => {
  const inputText = ctx.message.text;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [
        {
          role: "user",
          content: inputText,
        },
      ],
    });
    const response =
      completion.data.choices[0].message?.content || "No response";
    ctx.reply(response, keyboard);
  } catch (error) {
    ctx.reply(
      "An error occurred while processing your request. Please try again later."
    );
  }
});


bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}`, err);
  ctx.reply("An error occurred. Please try again later.");
});

export const handler = http(bot.webhookCallback("/maya-smart-bot"));
