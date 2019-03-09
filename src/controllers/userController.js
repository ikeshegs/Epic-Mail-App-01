import userModel from '../models/user';

class UserController {
    createUser(req, res) {
        // Check if the form is filled correctly
        if (!req.body.firstname) {
            return res.status(400).send({
                success: false,
                message: 'Firstname is required'
            });
        } else if (!req.body.lastname) {
            return res.status(400).send({
                success: false,
                message: 'Lastname is required'
            });
        } else if (!req.body.email) {
            return res.status(400).send({
                success: false,
                message: 'Email address is required'
            });
        } else if (!req.body.password) {
            return res.status(400).send({
                success: false,
                message: 'Password is required'
            }); 
        } else if (!req.body.phone) {
            return res.status(400).send({
                success: false,
                message: 'Phone Number is required'
            });
        }

        // Add New User
        const user = {
            id: userModel.length + 1,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        };

        userModel.push(user);
        return res.status(201).send({
            success: true,
            message: 'User created',
            user
        });
    }
    getUsers(req, res) {
        return res.status(200).send({
            success: true,
            message: 'All users retrieved successfully',
            userModel
        });
    }
}


const userController = new UserController();

export default userController;