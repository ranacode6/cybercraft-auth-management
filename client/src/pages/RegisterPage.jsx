import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { registration } from '../services/api';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmIsPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmIsPasswordVisible(!isConfirmPasswordVisible);
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();
  // const shareUrl = window.location.href;

  const onSubmit = async (data) => {
    try {
      await registration(data);
      toast.success('Login Successful!');
      navigate('/login');
      reset();
    } catch (error) {
      toast.error('Failed to register');
    }
  };
  return (
    <div className="bg-gray-100 flex justify-center w-full h-100 py-16">
      <Card className="relative w-full max-w-[1084px] rounded-lg shadow-[6px_6px_54px_#0000001a] bg-white overflow-hidden">
        <CardContent className="p-0 flex">
          {/* Left side with logo and welcome message */}
          <div className="w-[40%] bg-blue-100 flex flex-col items-center justify-center p-8">
            <img
              className="w-[294px] h-auto object-cover mb-8"
              alt="CyberCraft Bangladesh Logo"
              src="/asset-1-1.png"
            />
            <p className="text-center text-[#343434] text-xl font-normal">
              Welcome back to CyberCraft Bangladesh, where your creativity
              thrives
            </p>
          </div>

          {/* Right side with form */}
          <div className="w-[60%] p-16 flex flex-col items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[353px] space-y-6"
            >
              {/* Full Name Field */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="fullName"
                  className="text-sm text-[#345484] font-normal"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  {...register('fullName', {
                    required: 'Full name is required'
                  })}
                  placeholder="Your full name"
                  className="h-14 px-4 py-[18px] rounded-[10px] border-[#d8dadc] text-base placeholder:text-[#00000080]"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

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
                  Create a password
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

              {/* Confirm Password Field */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm text-[#345484] font-normal"
                >
                  Confirm password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) => {
                        const password = watch('password');
                        return password === value || 'Passwords do not match';
                      }
                    })}
                    placeholder="repeat password"
                    className="h-14 px-4 py-[18px] rounded-[10px] border-[#d8dadc] text-base placeholder:text-[#00000080] pr-10"
                  />
                  <div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {isConfirmPasswordVisible ? (
                      <EyeOffIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <EyeIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Create Account Button */}
              <Button className="w-full h-14 bg-[#345484] hover:bg-[#2a4369] text-white font-semibold text-base rounded-[10px]">
                Create account
              </Button>
            </form>
            {/* Or Divider */}
            <div className="text-center font-semibold text-lg text-[#000000b2] my-2">
              Or
            </div>

            {/* Login Link */}
            <div className="text-center text-sm">
              <span className="text-[#000000b2]">Already have an account?</span>{' '}
              <Link
                to="/login"
                className="font-semibold text-[#345484] underline"
              >
                Log in
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
