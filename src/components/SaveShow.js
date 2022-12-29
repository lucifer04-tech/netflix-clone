import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {AiOutlineClose} from 'react-icons/ai'
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SaveShow = () => {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth();

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
      };

      useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.saveShow)
        })
      }, [user?.email]);

      const movieRef = doc(db, 'users', `${user?.email}`)
      const deleteShow = async(id) => {
        try {
            const result = movies.filter(item => item.id !== id)
            await updateDoc(movieRef, {
                saveShow: result,
            })
        }catch(error){
            console.log(error)
        }
      }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) =>(
            <div key={id} className="relative p-2 cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w-[200px] w-[160px]">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item.img}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item.title}
                </p>
                <p onClick={() => deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4"><AiOutlineClose /></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SaveShow;
