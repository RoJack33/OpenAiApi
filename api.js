import OpenAIApi from 'openai';
import dotenv from "dotenv";
dotenv.config();

const openaiAPIKey = process.env.OPENAI_API_KEY;

if (!openaiAPIKey) {
  console.error("OPENAI API IS NOT SET");
  process.exit(1);
}

const configuration = new OpenAIApi({
  apiKey: openaiAPIKey
})

const openai = new OpenAIApi(configuration);

export default openai;