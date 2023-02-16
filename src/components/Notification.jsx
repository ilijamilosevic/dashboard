import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { chatData } from '../data/dummy';
import { Button } from '.';
const Notification = () => {
  const {handleClick, currentColor} = useStateContext();
  return (
    <div className="nav-item absolute right-5 md:right-30 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Notifications</p>
          <button
            type="button"
            onClick= {()=>{handleClick(false)}}
            style={{color: 'rgb(153,171,180)', borderRadius:'50%'}}
            className="text-2xl p-3 hover: drop-shadow-xl hover:bg-light-gray">
              <MdOutlineCancel />
            </button>
          </div>
          <div>
            {chatData.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-6 gap-3 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold ">{item.message}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.desc}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="mt-3 m-3">
        <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
          />
          </div>
      </div>
  )
}

export default Notification