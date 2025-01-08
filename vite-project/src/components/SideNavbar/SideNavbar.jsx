import React from 'react'
import './Sidenavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const Sidenavbar = ({sideNavbar}) => {
    return (
        <div className={ sideNavbar? "home-sideNavbar": "homeSideNavbarHide"}>

            {/* top Home sidenavbar */}
            <div className="home_sideNavbarTop">

                <div className={`home_sideNavbarTopOption`}>
                    <HomeIcon />
                    <div className='home_sideNavbarTopOptionTitle'>Home</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <VideocamIcon />
                    <div className='home_sideNavbarTopOptionTitle'>Shorts</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <SubscriptionsIcon />
                    <div className='home_sideNavbarTopOptionTitle'>Subscription</div>
                </div>


            </div>

            {/* middle home sidenavbar// coping above div options because same styling */}
            <div className="home_sideNavbarMiddle">

                <div className={`home_sideNavbarMiddleOption`}>
                    <div className='home_sideNavbarMiddleOptionTitle'>You</div>
                    <ChevronRightIcon />
                </div>

                <div className={`home_sideNavbarMiddleOption`}>
                    <RecentActorsIcon />
                    <div className='home_sideNavbarMiddleOptionTitle'>Your Channel</div>
                </div>

                <div className={`home_sideNavbarMiddleOption`}>
                    <HistoryIcon />
                    <div className='home_sideNavbarMiddleOptionTitle'>History</div>
                </div>

                <div className={`home_sideNavbarMiddleOption`}>
                    <PlaylistPlayIcon />
                    <div className='home_sideNavbarMiddleOptionTitle'>Playlists</div>
                </div>

                <div className={`home_sideNavbarMiddleOption`}>
                    <SmartDisplayOutlinedIcon />
                    <div className='home_sideNavbarMiddleOptionTitle'>Your Videos</div>
                </div>

                <div className={`home_sideNavbarMiddleOption`}>
                    <WatchLaterOutlinedIcon />
                    <div className='home_sideNavbarMiddleOptionTitle'>Watch later</div>
                </div>

                <div className={`home_sideNavbarMiddleOption`}>
                    <ThumbUpAltOutlinedIcon />
                    <div className='home_sideNavbarMiddleOptionTitle'>Liked videos</div>
                </div>

                <div className={`home_sideNavbarMiddleOption`}>
                    <ContentCutIcon/>
                    <div className='home_sideNavbarMiddleOptionTitle'>Your clips</div>
                </div>


            </div>

            {/* bottom home sidenavbar // coping middle because same styling */}

            <div className="home_sideNavbarBottom">
                
                <div className="home_sideNavbarTopOption">
                    <div className='home_sideNavbarBottomTitleHeader'>Subscription</div>
                </div>

                <div className="home_sideNavbarBottomOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://www.medianews4u.com/wp-content/uploads/2020/04/Aaj-Tak-2.jpg' />
                    <div className="home_sideNavbarBottomOptionTitle">Aaj Tak</div>
                </div>


                <div className="home_sideNavbarBottomOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://th.bing.com/th/id/R.bce6ed4af85677ce3b6908ac7e8e631b?rik=DFwXRhY0pZxYIg&pid=ImgRaw&r=0' />
                    <div className="home_sideNavbarBottomOptionTitle">The LallanTop</div>
                </div>

                <div className="home_sideNavbarBottomOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://th.bing.com/th/id/OIP.Ptvb889e_arCEj1IgCROgAHaHa?rs=1&pid=ImgDetMain' />
                    <div className="home_sideNavbarBottomOptionTitle">NDTV India</div>
                </div>



            </div>

        </div>
    )
}

export default Sidenavbar;
