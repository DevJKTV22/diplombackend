import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

class Donation extends Model {}
Donation.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        author:{type: DataTypes.STRING},
        text:{type: DataTypes.STRING},
        summ: {type: DataTypes.DECIMAL(10, 2)},
        
    },

    {
        sequelize: db, 
        tableName: 'donations',
        freezeTableName: true,
        modelName: 'Donation',
        timestamps: true,
     },
    
);
export default Donation;