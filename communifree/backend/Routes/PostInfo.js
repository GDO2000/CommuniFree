import express from "express";

import * as postInfoController from '../Controllers/PostInfo'

export const postInfoRoutes = express.Router();

const fetch = require('node-fetch'); // assuming you're using Node.js

// const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGVvcGp6a3RpcW9wcHNiYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDE5MzAsImV4cCI6MjAwMTYxNzkzMH0.UiwFY43g8klf3t182m4kUoDlsVkci-US1gEq-INk8vk';
// const baseUrl = 'https://ukdeopjzktiqoppsbbvq.supabase.co/rest/v1';

// fetch({baseUrl}/your-endpoint, {
//   headers: {
//     'apikey': apiKey
//   }
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

postInfoRoutes.get("/post_info", postInfoController.getAllPosts);

postInfoRoutes.get("/post_info:post_id", postInfoController.getPostByID);

postInfoRoutes.get("/post_info:customer_id", postInfoController.getPostByCustomerID);

postInfoRoutes.get("/post_info:title", postInfoController.getPostByTitle);

postInfoRoutes.get("/post_info:description", postInfoController.getPostByDescription);

postInfoRoutes.get("/post_info:location", postInfoController.getPostByLocation);

postInfoRoutes.delete("/post_info:post_id", postInfoController.deletePostByID);

postInfoRoutes.post("/post_info", postInfoController.createNewPost)