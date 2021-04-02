import { Avatar, Button } from '@material-ui/core'
import { useState } from 'react'
import './TweetBox.css'

const TweetBox = ({addTweet}) => {
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return ( 
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1327639173864460289/OkOTkK9F_200x200.jpg" ></Avatar>
          <input placeholder="What's Happening?" onChange={e=> setDesc(e.target.value)} type="text" />
        </div>
        <input className="tweetBox__inputImage" onChange={e=> setImageUrl(e.target.value)} placeholder="Enter Image URL" type="text" />
        <Button className="tweetBox__tweetButton" onClick={()=>addTweet(desc,imageUrl)}>Tweet</Button>
      </form>
    </div>
   );
}
 
export default TweetBox;