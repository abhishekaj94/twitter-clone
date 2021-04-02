import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';
import './HomeFeed.css';
import Post from './Post';
import TweetBox from './TweetBox';

const HomeFeed = () => {
  const user = useSelector(state => state.user.userData)
  const [tweets, setTweets] = useState([])
  console.log("User data from store " + JSON.stringify(user));

  const fetchTweets = () =>{
    axios.get('http://localhost:4000/tweets').then(response=>{
      var responseData = response.data;
      if(responseData.Status=== 'OK'){
        console.log(responseData.Data.Tweets)
        setTweets(responseData.Data.Tweets)
      }
      else{
        console.log("Error fetching tweets")
      }
    })
  }

  const addTweet = (desc,imageUrl) => {
    const postParams = {
      userId : user[0].userid,
      desc: desc,
      detail: {
        imageUrl: imageUrl,
        comments: []
      }
    }
    axios.post('http://localhost:4000/tweets', postParams).then(response=>{
      var responseData = response.data;
      if(responseData.Status=== 'OK'){
        console.log(responseData.Data)
      }
      else{
        console.log("Error Adding tweets")
      }
    })

  }

  useEffect(()=>{
    fetchTweets()
  }, [])
  
  return ( 
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      
      {/* New Tweet */}
      <TweetBox addTweet={addTweet}/>

      {/* Post */}
      {tweets && tweets.map(tweet=>(
        // <Post />
        <Post key={tweet.tweetid} tweet={tweet} displayname={tweet.fullname} handle={tweet.username} timestamp={tweet.createdon} postText={tweet.tweetdesc} postImage={tweet.detail.imageUrl}/>
      ))}

    </div>
   );
}
 
export default HomeFeed;