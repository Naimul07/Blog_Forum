import { useForm } from "react-hook-form"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function EmailVerify() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(true);
    const [error, setError] = useState("");
    
    const navigate = useNavigate();
    // const [inputName, setInputName] = useState(["otp1", "otp2", "otp3", "otp4", "otp5", "otp6"])
    const token = localStorage.getItem('token');

    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        else {
            setCanResend(true);
        }
        return () => clearInterval(countdown);
    }, [timer, canResend]);

    async function ResendLink() {
        setCanResend(false);
        setTimer(60);
        try {
            const response = await axios.get('/Api/resent/email', {

                headers: {
                    Authorization: `Bearer ${token}`
                },

            });
            console.log(response);
            toast.success(response.data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            
        }

    }

    async function onSubmit(data) {
        console.log(data);
        try {
            const response = await axios.post('/Api/verify/otp', {
                otp: data.otp
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(response);
            localStorage.setItem('email_verified_at',true);
            toast.success(response.data.message);
            navigate('/');
        }
        catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
            setError(err.response.data.message);
        }
    }

    return (
        <>
            <div className="container mx-auto">
                <div className=" h-svh flex flex-col justify-center items-center">
                    <div className="border w-4/5 md:w-3/5 lg:w-2/5 px-6 shadow-lg rounded-lg py-40 md:px-10">
                        <h1 className="pb-2">Enter otp</h1>

                        <form onSubmit={handleSubmit(onSubmit)} >

                            <input type="text" {...register('otp', {
                                required: "This field is required",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Only numbers are allowed",
                                },
                            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1" />

                            {errors.otp && <span className="text-red-500 text-xs mt-1 input-error">{errors.otp.message}</span>}
                            <button className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
                        </form>
                        {error && <span className="text-red-500  my-2 input-error block">{error} </span>}
                        {canResend ? (
                            <span onClick={ResendLink} className="text-blue-600 cursor-pointer hover:text-blue-800 transition duration-200 ease-in-out">Resend otp</span>
                        ) : (<span className="text-gray-400">
                            Resend OTP in {timer} seconds
                        </span>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailVerify