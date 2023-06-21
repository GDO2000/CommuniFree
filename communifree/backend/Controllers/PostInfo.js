import * as postIDModel from "../Models/PostInfo";

export async function getAllPosts(req, res) {
    const posts = await postIDModel.getAllPosts();
    res.status(200).json({success: true, payload: posts});
}

export async function getPostByID(req, res) {
    const post_id = (req.params.post_id)
    const post = await postIDModel.getPostByID(post_id);
    res.status(200).json({success: true, payload: post});
}

export async function getPostByCustomerID(req, res) {
    const customer_id = (req.params.customer_id)
    const post = await postIDModel.getPostByCustomerID(customer_id);
    res.status(200).json({success: true, payload: post});
}

export async function getPostByTitle(req, res) {
    const title = (req.params.title)
    const post = await postIDModel.getPostByTitle(title);
    res.status(200).json({success: true, payload: post});
}

export async function getPostByDescription(req, res) {
    const description = (req.params.description)
    const post = await postIDModel.getPostByDescription(description);
    res.status(200).json({sucess: true, payload: post});
}

export async function getPostByLocation(req, res) {
    const location = (req.params.location)
    const post = await postIDModel.getPostByLocation(location);
    res.status(200).json({sucess: true, payload: post});
}

export async function deletePostByID(req, res) {
    const post_id = (req.params.post_id)
    const post = await postIDModel.deletePostByPostID(post_id);
    res.status(200).json({sucess: true, payload: post});
}

export async function createNewPost(req, res) {
    let postData = req.body
    const newPost = await createNewPost(postData);
    res.status(201).json({
      success: true,
      payload: newPost,
    });
  };    


