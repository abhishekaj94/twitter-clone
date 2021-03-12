import './HomeFeed.css';
import Post from './Post';
import TweetBox from './TweetBox';

const HomeFeed = () => {
  return ( 
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      
      {/* New Tweet */}
      <TweetBox />
      {/* Post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      {/* More posts */}

    </div>
   );
}
 
export default HomeFeed;