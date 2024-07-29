import User from "../modal/user.modal.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try{
        const {
            username, 
            email, 
            password
        } = req.body;
        //check if the user is registered
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message: "User already exists"});
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const createUser = new User({
            username : username, 
            email : email, 
            password : hashPassword
        });
        await createUser.save();
        res.status(201).json({message : "User created successfully",
            user : {
                _id : createUser._id,
                username : createUser.username,
                email : createUser.email
            }
        });

    }catch(error){
        console.log("Error : ",error);
        res.status(500).json({message : "Internal Server Error"});
        
    }
}

// for login
export const login = async (req, res) => {
    try{
        const {
            email,
            password,
        }= req.body;

        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({message : "Invalid User or Password"});
        }else{
            res.status(200).json({message : "Login Successfull",
                user : {
                    _id : user._id,
                    username : user.username,
                    email : user.email
                }
        });
        }

    }catch(error){
        console.log("Error : ",error);
        res.status(500).json({message : "Internal Server Error"});
    }
}