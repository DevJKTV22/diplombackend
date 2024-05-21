import db from "../config/database.js";
import { DataTypes, Model } from "sequelize";
import Post from './post.js';


class CommentPost extends Model { }
CommentPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        news_id: { type: DataTypes.INTEGER },
        author_name: { type: DataTypes.STRING },
        text: { type: DataTypes.STRING },
        
        
    },
    {
        sequelize: db,
        tableName: 'comments_to_news',
        freezeTableName: true,
        modelName: 'CommentPost',
        timestamp: true,
    },

);

CommentPost.belongsTo(Post, { foreignKey: 'news_id', as: 'posts' });
Post.hasMany(CommentPost, { as: 'comments_to_news', foreignKey: 'news_id' });


export default CommentPost;