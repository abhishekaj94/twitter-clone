import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './Sidebar.css';

import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const Sidebar = () => {

  const history = useHistory();

  return ( 
    <div className="sidebar">
      <TwitterIcon onClick={()=>history.push("/")} className="sidebar__twitterIcon"/>
      <SidebarOption active text="Home" Icon= {HomeIcon} />
      <SidebarOption text="Explore" Icon= {SearchIcon} />
      <SidebarOption text="Notifications" Icon= {NotificationsIcon} />
      <SidebarOption text="Messages" Icon= {EmailIcon} />
      <SidebarOption text="Bookmarks" Icon= {BookmarkIcon} />
      <SidebarOption text="Lists" Icon= {FeaturedPlayListIcon} />
      <SidebarOption text="Profile" Icon= {PersonIcon} />
      <SidebarOption text="More" Icon= {MoreHorizIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
   );
}
 
export default Sidebar;