import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

const OTPVerification = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [timer, setTimer] = useState(60); // Timer for resend OTP
  const [canResend, setCanResend] = useState(false); // Resend OTP state

  // Refs for input fields
  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);
  const otp5Ref = useRef(null);
  const otp6Ref = useRef(null);

  useEffect(() => {
    let countdown;

    if (!canResend && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      setCanResend(true);
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [timer, canResend]);

  const onSubmit = (data) => {
    console.log("OTP Submitted: ", data);
    // handle OTP verification here
  };

  const resendOTP = () => {
    console.log("Resending OTP...");
    setCanResend(false);
    setTimer(60); // Restart the timer to 60 seconds
    // handle resend OTP request here
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 6) {
      switch (index) {
        case 1:
          otp2Ref.current.focus();
          break;
        case 2:
          otp3Ref.current.focus();
          break;
        case 3:
          otp4Ref.current.focus();
          break;
        case 4:
          otp5Ref.current.focus();
          break;
        case 5:
          otp6Ref.current.focus();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Verify Your Email</h2>
        <p className="text-gray-600 text-center mb-4">Enter the OTP sent to your email address.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-2 mb-6">
            <input
              className="col-span-1 border border-gray-300 rounded-lg p-3 text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              maxLength={1}
              {...register("otp1", { required: true, pattern: /^[0-9]{1}$/ })}
              onChange={(e) => handleInputChange(e, 1)}
              ref={otp1Ref}
            />
            <input
              className="col-span-1 border border-gray-300 rounded-lg p-3 text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              maxLength={1}
              {...register("otp2", { required: true, pattern: /^[0-9]{1}$/ })}
              onChange={(e) => handleInputChange(e, 2)}
              ref={otp2Ref}
            />
            <input
              className="col-span-1 border border-gray-300 rounded-lg p-3 text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              maxLength={1}
              {...register("otp3", { required: true, pattern: /^[0-9]{1}$/ })}
              onChange={(e) => handleInputChange(e, 3)}
              ref={otp3Ref}
            />
            <input
              className="col-span-1 border border-gray-300 rounded-lg p-3 text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              maxLength={1}
              {...register("otp4", { required: true, pattern: /^[0-9]{1}$/ })}
              onChange={(e) => handleInputChange(e, 4)}
              ref={otp4Ref}
            />
            <input
              className="col-span-1 border border-gray-300 rounded-lg p-3 text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              maxLength={1}
              {...register("otp5", { required: true, pattern: /^[0-9]{1}$/ })}
              onChange={(e) => handleInputChange(e, 5)}
              ref={otp5Ref}
            />
            <input
              className="col-span-1 border border-gray-300 rounded-lg p-3 text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              maxLength={1}
              {...register("otp6", { required: true, pattern: /^[0-9]{1}$/ })}
              onChange={(e) => handleInputChange(e, 6)}
              ref={otp6Ref}
            />
          </div>

          {Object.values(errors).length > 0 && (
            <p className="text-red-600 text-sm text-center mb-4">
              Please enter a valid 6-digit OTP.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Verify OTP
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          {canResend ? (
            <span
              onClick={resendOTP}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Resend OTP
            </span>
          ) : (
            <span className="text-gray-400">
              Resend OTP in {timer} seconds
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
