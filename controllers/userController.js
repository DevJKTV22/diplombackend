import Users from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//----------User creation-----------------
export const Register = async (req, res) => {
    try {

        const { name, email, password, confPassword, avatarUrl } = req.body;
        if (password !== confPassword) {
            return res.status(400).json({ msg: 'Password and Confirm Password do not match' });
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            avatarUrl: avatarUrl,
        }).then((response) => {
            const userid = response.id;
            const token = jwt.sign({ id: userid }, 'secretword123', {
                expiresIn: '30d',
            });
            res.json({ userid, token });
        });
    }
    catch (error) {
        console.log(error);
    }
};
//------------Login---------------------
export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email,
            },
        });
        // password control
        const isValidPass = await bcrypt.compare(req.body.password, user[0].password);
        if (!isValidPass) return res.status(400).json({ msg: 'Wrong Password' });

        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const role = user[0].role;
        const avatar = user[0].avatarUrl

        const token = jwt.sign({ userId, name, email, role, avatar }, 'secretword123', {
            expiresIn: '30d',
        });
        res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, });
        res.json({ userId, name, token });

    } catch (error) {
        res.status(404).json({ msg: 'Email not found' });
    }
};
//--------------Select user---------------
export const getMe = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                id: req.userId,
            },
        });
        console.log(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const role = user[0].role;
        const avatar = user[0].avatarUrl;
        res.json({ userId, name, email, role, avatar });

    } catch (err) {
        return res.status(403).json({
            message: 'No access query',
        });
    }
};
//--------------All users-----------------
export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email','role'],
        });
        res.json(users);

    }catch (error){
        console.log(error);
    }
};

//---------------Update user--------------------
export const updateUser = async (req, res) => {
    try {
        const { name, password, avatarUrl } = req.body;
        const userId = req.params.id; 

      
        const user = await Users.findByPk(userId);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        
        if (name) user.name = name;
        if (password) {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(password, salt);
            user.password = hashPassword;
        }
        if (avatarUrl) user.avatarUrl = avatarUrl;

       
        await user.save();

     
        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email, role: user.role, avatar: user.avatarUrl },
            'secretword123',
            { expiresIn: '30d' }
        );

      
        res.json({ userId: user.id, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};