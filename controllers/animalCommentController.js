import CommentAnimal from "../models/commentToAnimal.js";

export const getAllComments = async (req, res) => {
    try {
        const comments = await CommentAnimal.findAll({
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
        const comment = await CommentAnimal.findByPk(req.params.id);
        res.json(comment);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getCommentsByAnimalId = async (req, res) => {
    try {
        const comments = await CommentAnimal.findAll({
            where: { animal_id: req.params.id },
            order: [['id', 'DESC']],
        });
        res.json(comments);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createComment = async (req, res) => {
    try {
        const newComment = await CommentAnimal.create(req.body);
        res.json({ message: 'Comment Created', comment: newComment });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const updateComment = async (req, res) => {
    try {
        await CommentAnimal.update(req.body, {
            where: { id: req.params.id },
        });
        res.json({ message: 'Comment Updated' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deleteComment = async (req, res) => {
    try {
        await CommentAnimal.destroy({
            where: { id: req.params.id },
        });
        res.json({ message: 'Comment Deleted' });
    } catch (error) {
        res.json({ message: error.message });
    }
};