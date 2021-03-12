import { Avatar, Button } from '@material-ui/core'
import './TweetBox.css'

const TweetBox = () => {
  return ( 
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1327639173864460289/OkOTkK9F_200x200.jpg" ></Avatar>
          <input placeholder="What's Happening?" type="text" />
        </div>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
   );
}
 
export default TweetBox;