import React, {useState} from 'react';
import {LikeStyles, LikeInnerStyles} from './Like.styles';
import {FaHeart} from '@react-icons/all-files/fa/FaHeart';
import {FaRegHeart} from '@react-icons/all-files/fa/FaRegHeart';

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
      console.info(`No update data function in Like component, DB value would be updated by ${updateAmount}`);
    }
  }
  return (
    <LikeStyles>
      <LikeInnerStyles title="Leave a Like!">
        {hasLiked && <FaHeart onClick={OnClick}/>}
        {!hasLiked && <FaRegHeart onClick={OnClick}/>}
        <br/>
        <div>{typeof totalLikes !== 'undefined' ? totalLikes : ''}</div>
      </LikeInnerStyles>
    </LikeStyles>
  );
};

