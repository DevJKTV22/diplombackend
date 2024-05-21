import db from "../config/database.js";
import { DataTypes, Model } from "sequelize";
import Category from './category.js';


class Post extends Model { }
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: { type: DataTypes.STRING },
        category_id: { type: DataTypes.INTEGER },
        created_date: { type: DataTypes.DATE },
        author_name: { type: DataTypes.STRING },
        news_text: { type: DataTypes.STRING },
        photo: { type: DataTypes.STRING },
        
    },
    {
        sequelize: db,
        tableName: 'news',
        freezeTableName: true,
        modelName: 'Post',
        timestamp: true,
    },

);

Post.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Category.hasMany(Post, { as: 'news', foreignKey: 'category_id' });


export default Post;