import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'


function Sidebar() {
  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />

      <SidebarOption Icon={HomeIcon} title= "Home" />
      <SidebarOption Icon={SearchIcon} title= "Search" />
      <SidebarOption Icon={LibraryMusicIcon} title= "Your Library" />
    </div>
  )
}

export default Sidebar;