import Category from "../models/category.js";


//---------------all categories-----------------
export const getAllCategories = async (req, res)=>{
    try{
        const categories = await Category.findAll();
        res.json(categories);

    }catch (error) {
        res.json({message: error.message});
    }
};

//-----------------category by id-------------
export const getCategoryById = async (req,res)=>{
    try{
        const category = await Category.findAll({
            where: {id: req.params.id},
        });
        res.json(category[0]);
    }catch (error){
        res.json({message: error.message});
    }
};

//-------------create category------------------
export const createCategory = async (req, res)=>{
    try{
        await Category.create(req.body);
        res.json({
            message:'Category Created',
        });
        }catch (error){
            res.json({
                message: error.message
            });
        }
    };
//---------update category---------------------
export const updateCategory = async (req, res)=>{
    try{
        await Category.update(req.body, {
            where:{ id: req.params.id },
        });
        res.json({message: 'Category Updated'});
    }catch (error){
        res.json({message: error.message});
    }
};

//------------delete Category-----------------
export const deleteCategory = async (req, res) =>{
    try{
        await Category.destroy({
            where: {id: req.params.id},
        });
        res.json({message:'Category Deleted'});
    }catch(error){
        res.json({message: error.message});
    }
};