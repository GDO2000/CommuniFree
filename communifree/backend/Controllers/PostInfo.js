import * as poatIDModel from "../Models/PostInfo";

export async function getAllPosts(req, res) {
    const posts = await postIDModel.getAllPosts();
    res.status(200).json({sucess: true, payload: posts});
}

export async function getPostByID(req, res) {
    const post_id = (req.params.postID)
    const post = await postIDModel.getPostByID();
    res.status(200).json({sucess: true, payload: post});
}

