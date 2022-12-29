import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {UserAuth} from '../context/AuthContext';
import {db} from '../firebase';
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({item}) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const {user} = UserAuth();

  const movieID = doc(db,'users',`${user?.email}`);

  const saveShow = async() => {
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        saveShow: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        })
      })
    } else{
      alert('Please log in!!')
    }
  }

  return (
    <div className="relative p-2 cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w-[200px] w-[160px]">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute left-4 top-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute left-4 top-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
