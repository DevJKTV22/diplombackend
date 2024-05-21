//import { json } from "express/lib/response.js";
import Post from "../models/post.js"


export const getAllPosts = async(req, res) => {
    try{
        const posts =await Post.findAll({
            include: ['category'],
            where: {},
            order: [['created_date', 'DESC']],
        });
        res.json(posts);
    }catch{(error)
        res.json({message: error.message});
    }
};

export const getLastThreePosts = async (req, res) => {
    try {
        const lastThreePosts = await Post.findAll({
            limit: 3,            
            order: [['id', 'DESC']],
        });
        res.json(lastThreePosts);
    } catch (error) {
        res.json({ message: error.message });
    }
};


export const getPostById = async (req, res) =>{
    try {
        const post = await Post.findAll({
            include: ['category'],
            where: {id: req.params.id},
        });
        res.json(post[0]);
    }catch (error) {
        res.json({message: error.message });
    }
};


export const getPostByIdCategory =async (req,res) =>{
    try{
        const posts = await Post.findAll({
            include: ['category'],
            where: {category_id: req.params.id},
            order: [['created_date','DESC']],
        });
        res.json(posts);
    }catch (error){
        res,json({message: error.message});
    }
};


export const createPost = async (req, res) => {
    try {
        await Post.create(req.body);
        res.json({ message: 'Post Created' });

    } catch (error) {
        res.json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        await Post.update(req.body, {
            where: { id: req.params.id },
        });
        res.json({ message: 'Post Updated' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        await Post.destroy({
            where: { id: req.params.id },
        });
        res.json({ message: 'Post Deleted' });
    } catch (error) {
        res.json({ message: error.message });
    }
};