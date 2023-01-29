import React from 'react'

import "./Css/Card.css"

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Card = (props) => {
    return (
        <>
            <div class="card-wrapper">
                <div class="card-container">
                    <div class="card-header">
                        <img src={props.img}alt="" />
                    </div>
                    <div class="card-footer-title">
                        {props.name}
                    </div>
                </div>
                <div class="card-hover-content-container">
                    <div class="card-menu-icon">
                    <MenuRoundedIcon/>
                    </div>
                    <div class="card-hover-content">
                        <a href={props.insta}>
                            <InstagramIcon/>
                        </a>
                        <a href={props.github}>
                            <GitHubIcon/>
                        </a>
                        <a href={props.linkedin}>
                            <LinkedInIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card