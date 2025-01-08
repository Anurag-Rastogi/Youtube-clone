import React, { useState, useEffect } from 'react';
import './Video.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Video = () => {
    const [message, setMessage] = useState("");
    const [data, setData] = useState(null);
    const [videoUrl, setVideoURL] = useState("");
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    const fetchVedioById = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/getVideoById/${id}`);
            console.log(response.data.video);
            setData(response.data.video);
            setVideoURL(response.data.video.videoLink);
        } catch (err) {
            console.error(err);
        }
    };

    const getCommentByVideoId = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/commentApi/comment/${id}`);
            console.log(response);
            setComments(response.data.comments);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchVedioById();
        getCommentByVideoId();
    }, []);

    const handleComment = async () => {
        const body = {
            message,
            video: id,
        };

        try {
            const resp = await axios.post('http://localhost:4000/commentApi/comment', body, { withCredentials: true });
            console.log(resp);
            const newComment = resp.data.comment;
            setComments([newComment, ...comments]);
        } catch (err) {
            toast.error("Please login First");
        }
    };

    return (
        <div className="video">
            <div className="videoPostSection">
                <div className="video_youtube">
                    {data && (
                        <video width="400" controls autoPlay className="video_youtube_video">
                            <source src={videoUrl} type="video/mp4" />
                            <source src={videoUrl} type="video/webm" />
                        </video>
                    )}
                </div>

                <div className="video_youtubeAbout">
                    <div className="video_uTubeTitle">{data?.title}</div>
                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={`/user/${data?.user?._id}`} className="youtube_video_ProfileBlock_left_img">
                                <img src={data?.user?.profilePic} alt="" className="youtube_video_ProfileBlock_left_image" />
                            </Link>
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName">{data?.user?.channelName}</div>
                                <div className="youtubePostProfileSubs">{data?.user?.createdAt.slice(0, 10)}</div>
                            </div>
                            <button className="subscribeBtnYoutube">Subscribe</button>
                        </div>

                        {/* right part */}
                        <div className="youtube_video_likeBlock">
                            <div className="youtube_video_likeBlock_Like">
                                <ThumbUpOffAltIcon />
                                <div className="youtube_video_likeBlock_NoOfLikes">{data?.like}</div>
                            </div>
                            <div className="youtubeVideoDivider"></div>
                            <div className="youtube_video_likeBlock_Like">
                                <ThumbDownOffAltIcon />
                            </div>
                        </div>
                    </div>

                    {/* description part */}
                    <div className="youtube_video_About">
                        <div>{data?.createdAt.slice(0, 10)}</div>
                        <div>{data?.description}</div>
                    </div>

                    <div className="youtubeCommentSection">
                        <div className="youtubeCommentSectionTitle">{comments.length} comments</div>
                        <div className="youtubeSelfComment">
                            <img
                                src="https://yt3.googleusercontent.com/f0iLCrNntO0VhQIWfjL-VImU7zlUK_ImvoB6yUk_rRpAHKa6pzigju0_9j0_z6HiCCUG3e3e=s900-c-k-c0x00ffffff-no-rj"
                                alt=""
                                className="video_youtubeSelfCommentProfile"
                            />
                            <div className="addAComment">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="addAcommentInput"
                                    placeholder="Add a comment"
                                />
                                <div className="cancelSubmitComment">
                                    <div className="cancelComment">Cancel</div>
                                    <div className="cancelComment" onClick={handleComment}>
                                        Comment
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="youtubeOthersComments">
                            {comments.map((item, index) => (
                                <div className="youtubeOtherComment" key={index}>
                                    <img
                                        src={item?.user?.profilePic}
                                        alt=""
                                        className="video_youtubeSelfCommentProfile"
                                    />
                                    <div className="others_commentSection">
                                        <div className="others_commentSectionHeader">
                                            <div className="channelName_comment">{item?.user?.channelName}</div>
                                            <div className="commentTimingOthers">{item?.createdAt.slice(0, 10)}</div>
                                        </div>
                                        <div className="otherCommentSectionComment">{item?.message}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="videoSuggestions">
                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img
                            src="https://i.ytimg.com/vi/Nii_fBGb0_c/maxresdefault.jpg"
                            alt="thumbnail"
                            className="video_suggetion_thumbnail_img"
                        />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">
                            How to make a best thumbnail for your youtube video
                        </div>
                        <div className="video_suggetions_About_Profile">Crazy youtube</div>
                        <div className="video_suggetions_About_Profile">1M views . 1 day ago</div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Video;
