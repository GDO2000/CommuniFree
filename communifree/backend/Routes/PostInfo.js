import express from "express";

import * as postInfoController from '../Controllers/PostInfo'

export const postInfoRoutes = express.Router();

postInfoRoutes.get("/", postInfoController.getAllPosts);

postInfoRoutes.get("/post_info:post_id", postInfoController.getPostByID);

postInfoRoutes.get("/post_info:customer_id", postInfoController.getPostByCustomerID);

postInfoRoutes.get("/post_info:title", postInfoController.getPostByTitle);

postInfoRoutes.get("/post_info:description", postInfoController.getPostByDescription);

postInfoRoutes.get("/post_info:location", postInfoController.getPostByLocation);

postInfoRoutes.delete("/post_info:post_id", postInfoController.deletePostByID);

postInfoRoutes.post("/post_info", postInfoController.createNewPost);