import React, { useState } from 'react'
// Css
import "./Css/Home.scss"
import "./Css/Book.css"
// My Component
import Nav from "./Nav"
import Counter from './Counter'
import Rating from './Rating'
import Card from "./Card"
// Img
import book_cover from "./res/book_cover.png"
import logo from "./res/Logo.svg"
// Other Component
import Tooltip from '@mui/material/Tooltip';
import AnimatedText from 'react-animated-text-content';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
    const [back, setBack] = useState(false)
    const [heading, setHeading] = useState(true)
    const [suggestion, setSuggestion] = useState({ branch: "", book: "", author: "" })

    return (
        <>
            <Nav />
            <Rating />
            {/* Home */}
            <div className="Home">
                {/* view-back     open-book      view-rotate*/}
                <div className="BackContent">
                </div>
                <div className={heading ? "HomeContent" : "HomeContent hide"}>
                    <AnimatedText
                        type='letter'
                        interval={0.05}
                        duration={.4}
                        className="heading"
                        animation={{
                            y: '100px',
                            ease: 'ease-in-out',
                        }}
                    >
                        The Books
                    </AnimatedText>
                    <AnimatedText
                        type='words'
                        interval={0.05}
                        className="Des"
                        duration={1}
                        animation={{
                            y: '100px',
                            ease: 'ease',
                        }}
                    >
                        "The Books Are The Portal For Knowledge"
                    </AnimatedText>
                </div>

                {/* Book */}
                <Tooltip title={back ? "Click To Close" : "Click To Open"} arrow>
                    <div id="book" onMouseEnter={() => setHeading(false)} onMouseLeave={() => { setHeading(true); }} className={back ? "open-book" : "view-cover"} onClick={() => setBack(!back)}>
                        <div className="main">
                            <div className="book-font">
                                <div className="book-cover">
                                    <img src={book_cover} alt="" />
                                </div>
                                <div className="book-cover-back"></div>
                            </div>
                            <div className="book-page">
                                {/* page Details */}
                            </div>
                            <div className="book-back">
                                {/* <img src="https://i.pinimg.com/originals/29/c4/89/29c489252af8d27cb817b97538dcf9a5.png" alt="" /> */}
                            </div>
                            <div className="book-bone">
                                {/* Book Side */}
                            </div>
                            <div className="book-top"></div>
                            <div className="book-right"></div>
                            <div className="book-bottom"></div>
                        </div>
                    </div>
                </Tooltip>
            </div>
            {/* CardContainer */}
            <div className="CardContainer">
                <div className="box red">
                    <h2>Free Books & Notes</h2>
                    <p>We are providing 450+ free books here
                        with smooth download and suggestions for
                        book entry.</p>
                </div>
                <div className="box cyan">
                    <h2>Save Your Downloads</h2>
                    <p>Signup and save your progress with us,
                        Save downloaded books and hit like and save.</p>
                </div>
                <div className="box orange">
                    <h2>Questions & More</h2>
                    <p>We also provide question papers and syllabus
                        and a website for visualizing the complex structures.</p>
                </div>
            </div>
            {/* Counter */}
            <div className="Counter">
                <Counter target={450} title='Book' duration={2} />
                <Counter target={300} title='User' duration={2} />
                <Counter target={768} title='Download' duration={2} />
            </div>
            {/* Profile Coders */}
            <div className="ProfileCard">
                <Card img="https://1.bp.blogspot.com/-J_SmSLk4AKk/X5bbIBOJNGI/AAAAAAAAEAk/FrlG14Sbd-gnFcfV6yTpaYLxsaRGchNrACPcBGAsYHg/s724/IMG_20201026_194220.jpg" name="Love Babber" />
                <Card img="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" name="Tanmay Kumar" />
                <Card img="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" name="Swadhin Muduli" />
            </div>
            {/* Suggestion */}
            <div className="Suggestion">
                <div className="group">
                    <div className="heading">Suggest Us Anything!</div>
                    <div className="des">Send us book name and author name for adding</div>
                </div>
                <div className="group">
                    <div className="des" type="email">Email</div>
                    <input type="text" name="" id="" />
                </div>
                <div className="group">
                    <div className="des">Message</div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className='button'>Send</button>
            </div>
            {/* Footer */}
            <div className="Footer">
                <div className="Name">
                    <div className="heading">The Books</div>
                    <div className="des">"Get Set and Read"</div>
                </div>
                <div className="Logo"><img src={logo} alt="" /></div>
                <div className="social_handel">
                    <InstagramIcon sx={{ color: "#fff",fontSize: "30px" }}/>
                    <GitHubIcon sx={{ color: "#fff",fontSize: "30px" }}/>
                    <LinkedInIcon sx={{ color: "#fff",fontSize: "30px" }}/>
                </div>
            </div>
        </>
    )
}

export default Home
