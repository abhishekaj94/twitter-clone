import { Avatar } from '@material-ui/core';
import './Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from '@material-ui/icons/Publish';
import { useState } from 'react';
import axios from 'axios';

const Post = ({ tweet, displayname, handle, timestamp, postText, postImage, avatar }) => {

  const [isLiked, setIsLiked] = useState(false);

  const likeTweet = (tweetId) => {
    const postParams = {
      tweetId : tweetId
    }
    axios.post('http://localhost:4000/tweets/like',postParams).then(response=>{
      var responseData = response.data
      // console.log(response)
      if(responseData.Status ==="OK"){
        setIsLiked(true)
      }
      else{
        alert('Failed to make request')
      }
    })
  }

  return ( 
    <div className="post">
      <div className="post__avatar">
        <Avatar src=""></Avatar>
      </div>
      <div className="post__body">
        <div className="post__body__username">
          {displayname} <span className="post__body__handle">@{handle} . {timestamp}</span>
        </div>
        <div className="post__body__text">
          <p>{postText}</p>
        </div>
        <div className="post__body__image">
          {postImage && <img src={postImage} alt="Oops, not found"/> }
          {/* <img src="https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=500&name=plan%20gif%20marketing%20strategy.gif" alt="Oops"/> */}
        </div>
        <div className="post__body__actionButtons">
          <ChatBubbleOutlineIcon fontSize="small" style={{ color: 'green' }}/><span>{tweet.detail.comments.length}</span>
          <RepeatIcon fontSize="small" style={{ color: 'blue' }}/><span>{tweet.retweets}</span>
          {isLiked && <FavoriteIcon fontSize="small" style={{ color: 'red' }} onClick={() => setIsLiked(false)}/> }
          {!isLiked && <FavoriteBorderIcon fontSize="small" style={{ color: 'red' }} onClick={() => likeTweet(tweet.tweetid) } />}<span>{tweet.likes}</span>
          <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
   );
}
 
export default Post;