import './HomeFeed.css';
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
      {/* More posts */}

    </div>
   );
}
 
export default HomeFeed;