import express from 'express';
import cors from 'cors';
import router from './router/app.router';
import { uploadFilesRoute } from './app/uploads/uploads.contoller';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { aiNoteRoute } from './app/aiNote/aiNote.controller';

dotenv.config();

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();

// Middleware
app.use(router);
app.use(express.json());
app.use(cors());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

// Routes

app.use('/api', uploadFilesRoute, aiNoteRoute);

export default app;
