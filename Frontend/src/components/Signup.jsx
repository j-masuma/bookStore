import axios from 'axios';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    }=useForm();
    const onSubmit = async (data) =>{
        const userInfo ={
            username : data.username,
            email : data.email,
            password : data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success("User created successfully!!");
                navigate('/');
            }
            //localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.setItem('user', JSON.stringify(res.data.user));
        }).catch((error)=>{
            if(error.response){
                console.log(error.response.data.message);
                toast.error('Error : '+ error.response.data.message);
            }
        })
    }
  return (
    <div className=' flex items-center  justify-center min-h-screen'>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-80 shadow-md text-center p-6 rounded-md  dark:shadow-md dark:border-2px-slate-800 dark:bg-slate-800">
                    
                <h3 className="font-bold text-lg mt-2 dark:text-white">Signup</h3>
                
                <div className=' mt-5 space-y-3'>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username"
                        {...register('username', { required : true})} 
                        />
                    </label>
                    {errors.username && <span className='text-sm text-red-400 '>This field is required</span> }

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" 
                        {...register('email', { required : true})}
                        />
                    </label>
                    {errors.email && <span className='text-sm text-red-400'>This field is required</span>}

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Password" 
                        {...register('password', { required : true})}
                        />
                        
                    </label>
                    {errors.password && <span className='text-sm text-red-400'>This field is required</span>}


                    <div className='text-center'>
                        <button className="btn btn-secondary">Signup</button>
                    </div>
                    <p className='text-sm text-center'>
                        Already Registered? {" "}
                        <Link to={"/"} className='text-blue-500 cursor-pointer underline hover:text-blue-800'>Get Started</Link>
                    </p>
                </div>
            </div>
        </form>
        
    </div>
  )
}

export default Signup
