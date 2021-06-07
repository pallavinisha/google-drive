import React from 'react';
import '../../styles/Header.css';
import GDLogo from '../../media/gdlogo.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';


const index = ({userPhoto}) => {
    return (
        <div className='header'>
            <div className="header_logo">
                <img src={GDLogo} alt=""/>
                <span>Drive</span>
            </div>
            <div className="header_searchContainer"></div>
              <div className="header_searchBar">
                  <SearchIcon/>
                  <input type='text' placeholder='Search in Drive'/>
                  <ExpandMoreIcon/>

               </div>
            <div className="header_icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />

                </span>
                <AppsIcon />

                <img src={userPhoto} alt="User Photo" />

            </div>
            
        </div>
    )
}

export default index
