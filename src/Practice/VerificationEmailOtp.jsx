import { useForm } from "react-hook-form";
import axios from "axios";


function VerificationEmailOtp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const token = localStorage.getItem('token');
    // const [isResending,setIsResending]=useState(true);
    const onSubmit = async (data) => {
        const otpCode = Object.values(data).join(""); // Combine inputs to form OTP code
        console.log("OTP Code:", otpCode);

        try {
            const response = await axios.post('/Api/verify/otp', { otp: otpCode },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Verification success:", response.data.message);
            // Handle success response
        } catch (error) {
            console.log("Verification error:", error);
            // Handle error response
        }
    };
    async function resentmail() {
        try {
            // setIsResending(false);
            console.log('hi');
            const response = await axios.get('Api/resent/email', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <header className="mb-6 text-center">
                    <h1 className="text-3xl font-semibold text-gray-800">Email Verification</h1>
                    <p className="text-sm text-gray-600 mt-2">
                        Enter the 4-digit verification code sent to your Email.
                    </p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex items-center justify-center gap-4">
                        {["otp1", "otp2", "otp3", "otp4", "otp5", "otp6"].map((name, index) => (
                            <input
                                key={index}
                                type="text"
                                {...register(name, {
                                    required: "This field is required",
                                    maxLength: {
                                        value: 1,
                                        message: "Only one digit allowed",
                                    },
                                    pattern: {
                                        value: /^[0-9]$/,
                                        message: "Only numbers are allowed",
                                    },
                                })}
                                className={`w-12 h-12 text-center text-2xl font-bold text-gray-800 bg-gray-100 border ${errors[name] ? 'border-red-500' : 'border-transparent'} hover:border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all`}
                                maxLength="1"
                            />
                        ))}
                    </div>

                    {/* Display error message if any of the inputs has error */}
                    {errors.otp1 || errors.otp2 || errors.otp3 || errors.otp4 ? (
                        <p className="text-red-500 text-center text-sm mt-2">
                            Please fill all fields with valid digits.
                        </p>
                    ) : null}

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white text-sm font-medium py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all">
                        Verify Account
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Didn't receive a code?{' '}
                        <button
                            className="font-medium text-indigo-500 hover:text-indigo-600"
                            onClick={resentmail}
                        // disabled={isResending}
                        >Resent email</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VerificationEmailOtp;
