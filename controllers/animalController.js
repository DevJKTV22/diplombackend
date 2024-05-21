import Animal from "../models/animal.js";


//---------------all Animals-----------------
export const getAllAnimals = async (req, res)=>{
    try{
        const animals = await Animal.findAll();
        res.json(animals);

    }catch (error) {
        res.json({message: error.message});
    }
};

//-----------------Animal by id-------------
export const getAnimalById = async (req,res)=>{
    try{
        const animals = await Animal.findAll({
            where: {id: req.params.id},
        });
        res.json(animals[0]);
    }catch (error){
        res.json({message: error.message});
    }
};

//-------------create Animal------------------
export const createAnimal = async (req, res)=>{
    try{
        await Animal.create(req.body);
        res.json({
            message:'Animal Created',
        });
        }catch (error){
            res.json({
                message: error.message
            });
        }
    };
//---------update Animal---------------------
export const updateAnimal = async (req, res)=>{
    try{
        await Animal.update(req.body, {
            where:{ id: req.params.id },
        });
        res.json({message: 'Animal Updated'});
    }catch (error){
        res.json({message: error.message});
    }
};

//------------delete Animal-----------------
export const deleteAnimal = async (req, res) =>{
    try{
        await Animal.destroy({
            where: {id: req.params.id},
        });
        res.json({message:'Animal Deleted'});
    }catch(error){
        res.json({message: error.message});
    }
};

export const getLastAnimals = async (req, res) => {
    try {
        const animals = await Animal.findAll({
            limit: 4,
            order: [['id', 'DESC']], 
            
        });
        res.json(animals);
    } catch (error) {
        res.json({ message: error.message });
    }
};