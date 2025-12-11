// // const express = require('express');
// import express from 'express';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';
// import todoRoutes from './routes/todo.route.js'
// import path from 'path';

// const PORT = process.env.PORT || 5000;
// dotenv.config();
// const app = express();

// app.use(express.json());


// app.use("/api/todos", todoRoutes);

// const __dirname = path.resolve();
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/frontend/dist')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname,"../frontend/dist/index.html"));
//     });
// }

// app.listen(PORT, () => {
//     connectDB();
//     console.log("server is starting");
    
// })

import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.route.js";

dotenv.config();

const app = express();
app.use(express.json());

// API ROUTES
app.use("/api/todos", todoRoutes);

// ONLY FOR PRODUCTION 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(5000, () => {
  connectDB();
  console.log("server is starting");
});
