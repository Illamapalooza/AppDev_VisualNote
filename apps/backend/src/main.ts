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

const app = express();

// const connectToDatabase = async () => {
//   try {
//     await pool.connect();
//     console.log('Connected to the database');
//   } catch (error) {
//     console.error('Error connecting to the database', error);
//   }
// };

const startServer = async () => {
  // Middleware
  app.use(router);
  app.use(express.json());
  app.use(cors());

  // Routes

  app.use('/api', uploadFilesRoute, aiNoteRoute);

  // app.use('/api/get-users', async (req, res) => {
  //   const result = await db.query('SELECT * FROM users');
  //   res.json(result.rows);
  // });

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
};

startServer();

export default app;
