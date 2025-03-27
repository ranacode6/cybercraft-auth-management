import { BellIcon, SearchIcon } from 'lucide-react';
import { Input } from '../components/ui/input';

export const MainContentSection = () => {
  // Data for notifications
  const notificationCount = 6;

  // User profile data
  const userData = {
    name: 'Arya Stark',
    role: 'Admin',
    avatar: '/man-438081-960-720.png'
  };

  return (
    <header className="flex xs:flex-row w-full min-h-[64px] sm:min-h-[74px] items-center justify-between gap-3 xs:gap-4 sm:gap-[26px] p-3 sm:px-[55px] sm:py-[13px] bg-white shadow-[6px_6px_54px_#0000000d] sticky top-0 z-10">
      <div className="relative flex items-center w-full xs:w-[300px] sm:w-[450px] lg:w-[625px]">
        <Input
          className="bg-gray-100 h-8 pl-[13px] font-['Nunito_Sans',Helvetica] font-semibold text-sm"
          placeholder="Search"
        />
        <SearchIcon className="absolute right-3 w-[15px] h-[15px] opacity-50" />
      </div>

      <div className="flex items-center gap-3 xs:gap-4 sm:gap-[26px]">
        <div className="relative flex items-center">
          <BellIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          {notificationCount > 0 && (
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#4880ff] rounded-full flex items-center justify-center">
              <span className="font-['Nunito_Sans',Helvetica] font-bold text-white text-[10px] sm:text-xs">
                {notificationCount}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden xs:flex flex-col">
            <span className="font-['Inter',Helvetica] font-medium text-[#101010] text-sm sm:text-base">
              {userData.name}
            </span>
            <span className="font-['Inter',Helvetica] font-semibold text-[#565656] text-xs sm:text-sm">
              {userData.role}
            </span>
          </div>
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              alt="Profile"
              src={userData.avatar}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
