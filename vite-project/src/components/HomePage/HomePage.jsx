import React from 'react';
import './HomePage.css';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
const HomePage = ({ sideNavbar }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/allVideo').then(res => {
            console.log(res.data.videos)
            setData(res.data.videos);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const options = [
        "All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming",
        "Debates", "Podcast", "Democracy", "Shark Tank", "Comedy", "Live",
        "Travel", "Vlogs", "Technology", "Tour", "Vlogs", "Technology", "Tour"
    ];

    return (
        <div className={sideNavbar ? "homePage" : "fullHomePage"}>

            {/* top scrollable suggested category options */}
            <div className="homePage_options">
                {options.map((item, index) => (
                    <div key={index} className="homePage_option">
                        {item}
                    </div>
                ))}
            </div>


            {/* videos cards  */}

            <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>
                {
                    data?.map((item, ind) => {
                        return (
                            <Link to={`/watch/${item._id}`} className="youtube_Video">

                                {/* thumbnail box */}
                                <div className="youtube_thumbnailBox">
                                    <img src={item.thumbnail} alt="Thumbnail" className="youtube_thumbnailPic" />
                                    <div className="youtube_timingThumbnail">
                                        28:53
                                    </div>
                                </div>

                                {/* user information // channel name, likes */}

                                <div className="youtubeTitleBox">
                                    <div className="youtubeTitleBoxProfile">
                                        <img src={item?.user?.profilePic} alt="profile" className="youtube_thumbnail_Profile" />
                                    </div>
                                    <div className="youtubeTitleBox_Title">
                                        <div className="youtube_videoTitle">{item?.title}</div>
                                        <div className="youtube_channelName">{item?.user?.channelName}</div>
                                        <div className="youtubeVideo_views">{item.like}likes </div>
                                    </div>

                                </div>

                            </Link>
                        );
                    })
                }


            </div>

        </div>
    );
};

export default HomePage;



