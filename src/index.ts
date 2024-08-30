import { Request, Response } from "express";
import { app } from "./app";
import { model } from "./service/geminiModel";

async function story() {
  const prompt = "Write a story about an AI and magic"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text
}

app.get('/ping', (req: Request, res: Response) => {
  res.status(200).send('pong')
})

app.get('/story', async (req: Request, res: Response) => {
  try{
    const text = await story()
    res.status(200).send(text)
  } catch (error: any) {
    res.status(500).send({ error: error.message })
  }
})

app.listen(process.env.PORT || process.env.port, () => {
  console.log(`Server rodando http://localhost:${process.env.port}`);
})