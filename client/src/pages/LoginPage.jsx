import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../services/api.js';
import {
  loginStart,
  loginSuccess,
  loginFailure
} from '../store/slices/authSlice.js';

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

  const serverUrl = isProduction
    ? import.meta.env.VITE_SERVER_URL_PROD
    : import.meta.env.VITE_SERVER_URL_DEV;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch(loginStart());
      const response = await login(data);
      dispatch(loginSuccess(response.data));
      toast.success('Login Sucessful');
      navigate('/admin/dashboard');
    } catch (err) {
      dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-[974px] h-[521px] rounded-lg shadow-[6px_6px_54px_#0000001a] flex overflow-hidden">
        {/* Left side with logo and welcome message */}
        <div className="w-[470px] flex flex-col items-center justify-center p-8">
          <img
            className="w-[294px] h-[129px] object-cover mb-10"
            alt="CyberCraft Bangladesh Logo"
            src="/asset-1-1.png"
          />
          <p className="text-xl text-[#343434] text-center font-normal">
            Welcome back to CyberCraft Bangladesh, where your creativity thrives
          </p>
        </div>

        {/* Right side with login form */}
        <CardContent className="w-[504px] flex flex-col items-center justify-center p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[353px] space-y-6"
          >
            {/* Email Field */}
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-sm text-[#345484] font-normal"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="example@gmail.com"
                className="h-14 px-4 py-[18px] rounded-[10px] border-[#d8dadc] text-base placeholder:text-[#00000080]"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <Label
                htmlFor="password"
                className="text-sm text-[#345484] font-normal"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={isPasswordVisible ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long'
                    }
                  })}
                  placeholder="must be 8 characters"
                  className="h-14 px-4 py-[18px] rounded-[10px] border-[#d8dadc] text-base placeholder:text-[#00000080] pr-10"
                />

                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <EyeOffIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="w-full flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  className="w-5 h-5 rounded"
                  defaultChecked
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-[#345484] font-normal cursor-pointer"
                >
                  Remember me
                </Label>
              </div>
              <div className="text-sm text-[#345484] font-normal">
                Forgot password?
              </div>
            </div>

            {/* Login Button */}
            <Button className="w-full h-14 bg-[#345484] hover:bg-[#2a4369] text-white font-semibold text-base rounded-[10px]">
              Login
            </Button>
          </form>

          <div className="flex flex-col gap-3 my-3 w-3/4">
            <Link
              to={`${serverUrl}/api/auth/google`}
              className="w-full flex items-center justify-center gap-3 bg-[rgb(109,22,38)] hover:bg-[#651421] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <img src="/google.svg" className="w-5 h-5" />
              <span>Login with Google</span>
            </Link>

            <Link
              to={`${serverUrl}/api/auth/facebook`}
              className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1864D6] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <img src="/facebook.svg" className="w-5 h-5" />
              <span>Login with Facebook</span>
            </Link>
          </div>

          {/* Sign up link */}
          <div className="text-sm font-normal mt-3">
            <span className="text-[#000000b2]">
              Don&apos;t have an account?
            </span>
            <Link
              to="/register"
              className="text-[#345484] font-semibold ml-1 underline"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
