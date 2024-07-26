import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    }=useForm();

    const onSubmit = async (data) =>{
        const userInfo ={
            email : data.email,
            password : data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success("LoggedIn successfully!");
                closeModal();
               setTimeout(()=>{
                window.location.reload();    
               },2000)
            }
            //localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.setItem('user', JSON.stringify(res.data.user));
        }).catch((error)=>{
            if(error.response){
                console.log(error.response.data.message);
                
                toast.error('Error : '+ error.response.data.message);
                
                setTimeout(()=>{},2000);
            }
        })
    }

    const closeModal = () => {
        document.getElementById('login_modal').close();
    }
  return (
    <div>
        <dialog id="login_modal" className="modal ">
            <div className="modal-box ">
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it will close the modal */}
                    <button 
                    type="button" 
                    onClick={closeModal} 
                    method="dialog" 
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</button>
                
                    <h3 className="font-bold text-lg text-center dark:text-black">Login</h3>
                    
                    <div className=' mt-5 space-y-3'>
                       
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
                                className={`h-4 w-4 opacity-70 `}>
                                <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                            </svg>
                            <input 
                            type="password" 
                            className="grow" 
                            placeholder='Password' 
                            {...register('password', { required : true})}
                            />
                            
                        </label>
                        {errors.password && <p className='text-sm text-red-400 '>This field is required</p>}
                        <div className='text-center'>
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <p className='text-sm text-center'>
                            Not Registered? {" "}
                            <Link to={"/signup"} className='text-blue-500 cursor-pointer underline hover:text-blue-800'>Signup</Link>
                        </p>
                    </div>
                </form>
            </div>
        </dialog>
    </div>
  )
}

export default Login
