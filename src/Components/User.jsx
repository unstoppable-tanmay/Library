import React from 'react'
import "./Css/User.scss"

import Nav from "./Nav"
import TimeLine from "./TimeLine"

import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Divider from '@mui/material/Divider';

const User = () => {
    return (
        <>
            <Nav />
            <div className="User">
                <div className="UserContainer">
                    <div className="UserInfo">
                        <div className="UserCard">
                            <img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpZGUlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="profile" />
                            <div className="Content">
                                <div className="name">Tanmay Kumar</div>
                                <div className="des">CSE 5th sem</div>
                            </div>
                        </div>
                        <div className="UserSpec">
                            <div className="heading">About You</div>
                            <div className="UserData">
                                <div className="email">Email : tanmaypanda752@gmail.com</div>
                                <div className="userid">User Id : 2001110091</div>
                            </div>
                        </div>
                    </div>
                    <div className="UserStatus">
                        <div className="statusHolder">
                            <img src="https://cdn.dribbble.com/users/515705/screenshots/9818728/media/4a706681babc1cf92c04487bcdfbfdde.jpg?compress=1&resize=400x300" alt="" />
                        </div>
                        <div className="Data">
                            <div className="downloads">
                                <DownloadRoundedIcon sx={{ fontSize: "30px", color: "#8f86ff" }} />
                                <span>57 Downloads</span>
                            </div>
                            <div className="saved">
                                <BookmarkRoundedIcon sx={{ fontSize: "30px", color: "#8f86ff" }} />
                                <span>48 Saved</span>
                            </div>
                        </div>
                        <div className="quote">"The way to get started is to quit talking and begin doing."</div>
                    </div>
                </div>
                <div className="mailus">
                    
                </div>
                {/* <div className="TimeLine">
                    Downloads
                    <TimeLine />
                </div> */}
            </div>
        </>
    )
}

export default User