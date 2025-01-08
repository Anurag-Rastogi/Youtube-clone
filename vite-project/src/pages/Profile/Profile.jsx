import React from 'react'
import { useState, useEffect } from 'react';
import './Profile.css'
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from 'react-router-dom';
const Profile = ({ sideNavbar }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const fetchProfileData = async () => {
    axios.get(`http://localhost:4000/api/${id}/channel`).then((response) => {
      console.log(response);
      setData(response.data.video);
      setUser(response.data.video[0]?.user);
    }).catch(err => {
      console.log(err);
    })

  }


  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <div className='profile'>
      <SideNavbar sideNavbar={sideNavbar} />
      <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>
        {/* Profile Top Section */}
        <div className="profile_top_section">
          <div className="profile_top_section_profile">
            <img src={user?.profilePic} alt="Profile Image" className='profile_top_section_img' />
          </div>
          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">{user?.channelName}</div>
            <div className="profile_top_section_info">{user?.userName} . {data.length} videos</div>
            <div className="profile_top_section_info">{user?.about}</div>

          </div>
        </div>

        {/* Profile bottom section of Videos */}

        <div className="profile_videos">
          <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

          <div className="profileVideos">

            {
              data.map((item, key) => {
                return (
                  <Link to={`/watch/${item._id}`} className="profileVideo_block">
                    <div className="profileVideo_block_thumbnail">
                      <img src={item?.thumbnail} alt="" className='profileVideo_block_thumbnail_img' />
                    </div>
                    <div className="profileVideo_block_detail">
                      <div className="profileVideo_block_detail_name">{item?.title}</div>
                      <div className="profileVideo_block_detail_about">created at {item?.createdAt.slice(0,10)}</div>
                    </div>
                  </Link>
                )
              })
            }
            {/* div for videos */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
