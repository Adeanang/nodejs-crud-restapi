import express from 'express';
import dotenv from 'dotenv';

import userRouter from './routers/userRouters.js';
import categoriesRouters from './routers/categoriesRouters.js';
import productRouter from './routers/productRouters.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/categories", categoriesRouters);
app.use("/products", productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di https://localhost:${process.env.PORT}`);
});
