import { Avatar } from '@material-ui/core';
import './Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({ tweet, displayname, handle, timestamp, postText, postImage, avatar }) => {


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
          <ChatBubbleOutlineIcon fontSize="small" />{tweet.detail.comments.length}
          <RepeatIcon fontSize="small"/>{tweet.retweets}
          <FavoriteBorderIcon fontSize="small"/>{tweet.likes}
          <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
   );
}
 
export default Post;