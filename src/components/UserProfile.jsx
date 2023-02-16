import React from 'react'
import { Route } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { userProfileData,userProfile } from '../data/dummy';
import { Button } from '.';

const UserProfile = () => {
  const {handleClick,currentColor} = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-0 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
    <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">User profile</p>
          <button
            type="button"
            onClick= {()=>{handleClick(false)}}
            style={{color: 'rgb(153,171,180)', borderRadius:'50%'}}
            className="text-2xl p-3 hover: drop-shadow-xl hover:bg-light-gray">
              <MdOutlineCancel />
            </button>
          </div>
          {userProfile.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-6 gap-3 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-full h-24 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.message}</p>
                  <p className="font-semibold text-lg">{item.desc}</p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
        {userProfileData.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-6 gap-3 border-b-1 border-color dark:border-gray-600 p-4">
              <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>
                <div>
                  <p className="font-semibold ">{item.title}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 m-3">
        <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
          />
          </div>
    </div>
  )
}

export default UserProfile