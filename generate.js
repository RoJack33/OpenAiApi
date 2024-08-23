import openai from "./api.js";

const generate = async (queryDescription) => {

  const davinci = async(queryDescription) => {
     try {
       const response = await openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         prompt: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`,
         max_tokens: 100,
         temperature: 0,
       });

       return response.data.choices[0].text.trim();
     } catch (error) {
       console.error("Error generating SQL query:", error.message);
       throw error;
     }
  }
 

  const chatGptApi = async (queryDescription) => {
    const messages = [
      { role: "system", content: `You are a translator from plain English to SQL.`},
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\nshow all elements from the table.`},
      { role: "assistant", content: `SELECT * FROM USERS;`},
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`}
    ];
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    return response.data.choices[0].message.content
  }

  return await chatGptApi(queryDescription)
};

export default generate;
