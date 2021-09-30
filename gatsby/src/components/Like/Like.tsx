import React, {useState} from 'react';
import {LikeStyles, LikeInnerStyles} from './Like.styles';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

interface LikeProps {
  likes?: number,
  liked?: boolean,
  updateData?: any,
}

export const Like = ({likes, liked, updateData}: LikeProps) => {
  const [totalLikes, setLikes] = useState(likes);
  const [hasLiked, setLiked] = useState(liked);
  function OnClick() {
    let updateAmount = 0;
    if (hasLiked) {
      updateAmount = -1;
      setLiked(false);
    } else {
      updateAmount = 1;
      setLiked(true);
    }
    setLikes(totalLikes + updateAmount);
    if (updateData) {
      updateData(updateAmount);
    } else {
      console.info(`No update data function in Like component, would be updated by ${updateAmount}`);
      console.info(`Likes: ${totalLikes}, liked: ${totalLikes}`);
    }
  }
  return (
    <LikeStyles>
      <LikeInnerStyles title="W.I.P - Like">
        {hasLiked && <FaHeart onClick={OnClick}/>}
        {!hasLiked && <FaRegHeart onClick={OnClick}/>}
        <br/>
        <span>{totalLikes}</span>
      </LikeInnerStyles>
    </LikeStyles>
  );
};

