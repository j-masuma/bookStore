import { useForm } from "react-hook-form"
import toast from "react-hot-toast";


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    }=useForm();
    const onSubmit = (data) =>{
        console.log(data);
        toast.success("Contact info submitted successfully!!!");
    }
  return (
    <div className=" flex items-center  justify-center min-h-screen ">
        
      <form action="" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-lg font-bold">Contact Us</h1>
            <div className="">
                <p className="text-sm mt-2 mb-1">Name</p>
                <label className="input input-bordered flex items-center gap-2">
                
                <input type="text" className="grow" placeholder="Full Name"
                {...register('name', { required : true})}
                />
                </label>
                {errors.name && <span className='text-sm text-red-400 '>Please enter your name</span>}

                <p className="text-sm mt-2 mb-1">Email</p>
                <label className="input input-bordered flex items-center gap-2">
                
                <input type="text" className="grow" placeholder="Email"
                {...register('email', { required : true})}
                />
                </label>
                {errors.email && <span className='text-sm text-red-400 '>Please enter your email</span>}

                {/* sm */}
                <p className="text-sm mt-2 mb-1">Message</p>
                <textarea
                placeholder="Type Your Message Here"
                className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                {...register('message', { required : true})}
                ></textarea>
                <br />
                {errors.message && <span className='text-sm text-red-400 '> Please enter you message</span>}
                <br />
                <button className="btn btn-sm btn-secondary">Submit</button>
            </div>
      </form>
    </div>
  )
}

export default Contact
