import React from 'react';
import { FaHome, FaUser, FaBell, FaComment, FaCog } from 'react-icons/fa'; // Import React icons

const Main_Side_Bar = () => {
  return (
    <div className="h-[100%] flex flex-col items-center  border-neutral-500 bg-gray-800 text-white p-4 w-16 border-r-2 rounded-md">
      {/* Top Icons */}
      <div className="flex flex-col space-y-4 mb-auto">
        <FaHome className="text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
        <FaUser className="text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
        <FaBell className="text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col space-y-4 mt-auto">
        <FaComment className="text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
        <FaCog className="text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
      </div>
    </div>
  );
};

export default Main_Side_Bar;
