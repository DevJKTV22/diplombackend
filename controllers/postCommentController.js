//import { json } from "express/lib/response.js";
import CommentPost from "../models/commentToPost.js"


export const getAllComments = async (req, res) => {
    try {
        const comments = await CommentPost.findAll({
            where: {},
            order: [['id', 'DESC']],
        });
        res.json(comments);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getCommentById = async (req, res) => {
    try {
        const comment = await CommentPost.findByPk(req.params.id);
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getCommentsByNewsId = async (req, res) => {
    try {
        const comments = await CommentPost.findAll({
            where: { news_id: req.params.id },
            order: [['id', 'DESC']],
        });
        res.json(comments);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createComment = async (req, res) => {
    try {
        const newComment = await CommentPost.create(req.body);
        res.json({ message: 'Comment Created', comment: newComment });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const updateComment = async (req, res) => {
    try {
        await CommentPost.update(req.body, {
            where: { id: req.params.id },
        });
        res.json({ message: 'Comment Updated' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deleteComment = async (req, res) => {
    try {
        await CommentPost.destroy({
            where: { id: req.params.id },
        });
        res.json({ message: 'Comment Deleted' });
    } catch (error) {
        res.json({ message: error.message });
    }
};