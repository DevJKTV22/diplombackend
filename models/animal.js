import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

class Animal extends Model {}
Animal.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        
        name:{type: DataTypes.STRING},
        sex: {type: DataTypes.ENUM('Male', 'Female')},
        age:{ type: DataTypes.INTEGER },
        created_date:{ type: DataTypes.DATE },
        from_place:{type: DataTypes.STRING},
        vaccine:{type: DataTypes.ENUM('Yes', 'No')},
        place_now:{type: DataTypes.ENUM('Shelter', 'At owner') },
        owner_phone:{type: DataTypes.STRING},
        photo:{type: DataTypes.STRING},
    },

    {
        sequelize: db, 
        tableName: 'animals',
        freezeTableName: true,
        modelName: 'Animal',
        timestamps: true,
     },
    
);
export default Animal;