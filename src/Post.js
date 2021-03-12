import { Avatar } from '@material-ui/core';
import './Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({ displayname, handle, timestamp, postText, postImage, avatar }) => {


  return ( 
    <div className="post">
      <div className="post__avatar">
        <Avatar src=""></Avatar>
      </div>
      <div className="post__body">
        <div className="post__body__username">
          Abhishek Jain <span className="post__body__handle">@abhishek . 25m</span>
        </div>
        <div className="post__body__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illum veritatis minima nobis unde aliquam ipsum quis, nulla totam ea quia rem eum praesentium modi fuga, corporis animi. Repudiandae, commodi!</p>
        </div>
        <div className="post__body__image">
          <img src="https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=500&name=plan%20gif%20marketing%20strategy.gif" alt="Oops"/>
        </div>
        <div className="post__body__actionButtons">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
   );
}
 
export default Post;