import SearchIcon from '@material-ui/icons/Search';

import './Widgets.css';

const Widgets = () => {
  return ( 
    <div className="widgets">
      <div className="widgets__search">
        <SearchIcon className="widgets__searchIcon"/>
        <input type="text" placeholder="Search Twitter"/>
      </div>
      <div className="widgets__whatsHappening">
        <h2>What's Happening</h2>
      </div>
      <div className="widgets__whoToFollow">
        <h2>Who To Follow</h2>
      </div>
    </div>
   );
}
 
export default Widgets;