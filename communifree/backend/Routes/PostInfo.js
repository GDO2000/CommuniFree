import express from "express";

import * as postInfoController from '../db'

export const postInfoRoutes = express.Router();

postInfoRoutes.get("/post_info", postInfoController.)