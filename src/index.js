import express from 'express';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(router)

app.listen(PORT, () =>
  console.log(`running on port: http://localhost:${PORT}`)
);

export default app;
