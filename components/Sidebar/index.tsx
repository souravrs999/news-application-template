import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoBeakerOutline } from "react-icons/io5";
import { BsBox } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="w-72 h-screen bg-white">
      <div className="flex flex-col justify-between p-5 h-full">
        {/* user avatar/date/time */}
        <div className="flex flex-col space-y-3 w-full">
          <span className="overflow-hidden w-12 h-12 rounded-full">
            <Image
              src="/images/avatar/user-avatar.jpg"
              width={100}
              height={100}
              alt=""
              layout="responsive"
            />
          </span>
          <div className="text-sm">
            <p className="font-bold text-gray-700">Feb 02, 2020</p>
            <p className="font-medium text-gray-400">08:43 am</p>
          </div>
        </div>

        {/* navigation links */}
        <div className="flex flex-col space-y-10">
          {/* item */}
          <div className="flex justify-between items-center group">
            <div className="flex items-center space-x-5">
              <div className="grid place-items-center w-8 h-8 bg-gray-300 rounded-lg group-hover:bg-blue-600">
                <AiOutlineHome className="text-gray-600 group-hover:text-white" />
              </div>
              <p className="font-bold text-gray-500 group-hover:text-gray-700">
                Home
              </p>
            </div>
            <span className="w-2 h-2 rounded-full group-hover:bg-blue-600" />
          </div>
          {/* /item */}
          {/* item */}
          <div className="flex justify-between items-center group">
            <div className="flex items-center space-x-5">
              <div className="grid place-items-center w-8 h-8 bg-gray-300 rounded-lg group-hover:bg-blue-600">
                <FaRegCircle className="text-gray-600 group-hover:text-white" />
              </div>
              <p className="font-bold text-gray-500 group-hover:text-gray-700">
                International
              </p>
            </div>
            <span className="w-2 h-2 rounded-full group-hover:bg-blue-600" />
          </div>
          {/* /item */}
          {/* item */}
          <div className="flex justify-between items-center group">
            <div className="flex items-center space-x-5">
              <div className="grid place-items-center w-8 h-8 bg-gray-300 rounded-lg group-hover:bg-blue-600">
                <RiBuilding2Line className="text-gray-600 group-hover:text-white" />
              </div>
              <p className="font-bold text-gray-500 group-hover:text-gray-700">
                Business
              </p>
            </div>
            <span className="w-2 h-2 rounded-full group-hover:bg-blue-600" />
          </div>
          {/* /item */}
          {/* item */}
          <div className="flex justify-between items-center group">
            <div className="flex items-center space-x-5">
              <div className="grid place-items-center w-8 h-8 bg-gray-300 rounded-lg group-hover:bg-blue-600">
                <FiPlay className="text-gray-600 group-hover:text-white" />
              </div>
              <p className="font-bold text-gray-500 group-hover:text-gray-700">
                Entertainment
              </p>
            </div>
            <span className="w-2 h-2 rounded-full group-hover:bg-blue-600" />
          </div>
          {/* /item */}
          {/* item */}
          <div className="flex justify-between items-center group">
            <div className="flex items-center space-x-5">
              <div className="grid place-items-center w-8 h-8 bg-gray-300 rounded-lg group-hover:bg-blue-600">
                <MdOutlineSportsBasketball className="text-gray-600 group-hover:text-white" />
              </div>
              <p className="font-bold text-gray-500 group-hover:text-gray-700">
                Sports
              </p>
            </div>
            <span className="w-2 h-2 rounded-full group-hover:bg-blue-600" />
          </div>
          {/* /item */}
          {/* item */}
          <div className="flex justify-between items-center group">
            <div className="flex items-center space-x-5">
              <div className="grid place-items-center w-8 h-8 bg-gray-300 rounded-lg group-hover:bg-blue-600">
                <IoBeakerOutline className="text-gray-600 group-hover:text-white" />
              </div>
              <p className="font-bold text-gray-500 group-hover:text-gray-700">
                Health
              </p>
            </div>
            <span className="w-2 h-2 rounded-full group-hover:bg-blue-600" />
          </div>
          {/* /item */}
        </div>

        {/* card */}
        <div className="p-5 w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-3 w-full">
              <div className="text-white">
                <h5 className="text-sm font-medium">News in a box</h5>
                <p className="text-xs opacity-60">Box is all you need</p>
              </div>
              <button className="p-1 font-medium text-white bg-blue-800 rounded-lg">
                Upgrade
              </button>
            </div>
            <div className="grid place-items-center w-full text-white">
              <BsBox className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
