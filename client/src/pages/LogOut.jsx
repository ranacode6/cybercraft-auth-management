import { SearchIcon } from 'lucide-react';
import { Avatar } from '../components/ui/avatar';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Link } from 'react-router-dom';

const LogOut = () => {
  return (
    <div className="bg-gray-100 flex flex-row justify-center w-full min-h-screen">
      <div className="bg-gray-100 w-full relative">
        {/* Main logout card */}
        <div className="flex justify-center items-center pt-[120px]">
          <Card className="w-[840px] h-[568px] bg-white shadow-md">
            <CardContent className="flex flex-col items-center justify-center h-full p-8">
              {/* Logo */}
              <img
                className="w-[243px] h-[106px] object-cover mb-16"
                alt="CyberCraft Bangladesh Logo"
                src="/asset-1-1-1.png"
              />

              {/* Thank you message */}
              <p className="font-normal text-[#605d5d] text-[32px] text-center mb-12">
                Thank you so much for your nice
                <br />
                contribution for today.
              </p>

              {/* Login button */}
              <Link
                to="/login"
                className="bg-[#345484] hover:bg-[#2a4369] text-white text-lg font-medium px-5 py-2"
              >
                Go Back to Login
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Top navigation bar */}
        <div className="flex h-[74px] items-center justify-between px-[55px] py-[13px] fixed top-0 left-0 right-0 bg-white shadow-md z-10">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <img
              className="w-[118px] h-[52px] object-cover"
              alt="CyberCraft Bangladesh Logo"
              src="/asset-1-1-1.png"
            />
          </div>

          {/* Right side - SearchIcon, notifications, profile */}
          <div className="flex items-center gap-[26px]">
            {/* SearchIcon bar */}
            <div className="relative w-[625px]">
              <Input
                className="h-8 bg-gray-100 pl-[13px] pr-10 py-[3px] rounded-[5px]"
                placeholder="Search"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="w-[15px] h-[15px] text-gray-500 opacity-50" />
              </div>
            </div>

            {/* Notification icon */}
            <div className="relative w-8 h-[31.5px]">
              <div className="relative w-[30px] h-8">
                <div className="absolute w-6 h-[26px] top-1.5 left-0">
                  <img
                    className="absolute w-6 h-[18px] top-0 left-0"
                    alt="Notification icon"
                    src="/combined-shape.svg"
                  />
                  <div className="absolute w-1.5 h-1.5 top-5 left-[9px] bg-[#4880ff] rounded-[2.25px] opacity-30" />
                </div>
                <img
                  className="absolute w-[18px] h-[18px] top-0 left-3"
                  alt="Notification background"
                  src="/oval.svg"
                />
                <img
                  className="absolute w-4 h-4 top-px left-[13px]"
                  alt="Notification circle"
                  src="/oval.svg"
                />
                <div className="absolute top-px left-[17px] font-bold text-white text-xs">
                  6
                </div>
              </div>
            </div>

            {/* User profile */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-medium text-[#101010] text-base whitespace-nowrap">
                  Arya Stark
                </span>
                <span className="font-semibold text-[#565656] text-sm">
                  Admin
                </span>
              </div>
              <Avatar className="w-11 h-11">
                <img
                  src="/man-438081-960-720.png"
                  alt="User profile"
                  className="w-full h-full object-cover"
                />
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
