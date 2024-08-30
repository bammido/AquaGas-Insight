import { Request, Response } from "express";
import { app } from "./app";
import { model } from "./service/geminiModel";
import { measureRouter } from "./routes/measureRoutes";

app.use('/', measureRouter)

async function story() {
  const prompt = "escreva uma hitória com ia e magia"

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

app.listen(3333, () => {
  console.log(`Server rodando http://localhost:${3333}`);
})