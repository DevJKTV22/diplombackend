import db from "../config/database.js";
import { DataTypes, Model } from "sequelize";
import Animal from './animal.js';


class CommentAnimal extends Model { }
CommentAnimal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        animal_id: { type: DataTypes.INTEGER },
        author_name: { type: DataTypes.STRING },
        text: { type: DataTypes.STRING },    
    },
    {
        sequelize: db,
        tableName: 'comments_to_animal',
        freezeTableName: true,
        modelName: 'CommentAnimal',
        timestamp: true,
    },

);

CommentAnimal.belongsTo(Animal, { foreignKey: 'animal_id', as: 'animals' });
Animal.hasMany(CommentAnimal, { as: 'comments_to_animal', foreignKey: 'animal_id' });


export default CommentAnimal;