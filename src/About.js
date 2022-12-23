import React from 'react'

import img2 from "./res/nerd-larry-book-d-illustration-study-education-concept-202167569-transformed 1.svg"
import img3 from "./res/d-illustration-nerd-larry-reading-book-couch-204099132-transformed (1) 1.svg"
import img4 from "./res/vr-concept-nerd-larry-virtual-reality-glasses-d-illustration-d-illustration-nerd-larry-virtual-reality-glasses-vr-concept-201528919-transformed 1.svg"

const About = () => {
    return (
        <>
            <div className="About w-11/12 mt-10 h-auto flex justify-around items-center">
                <img src={img2} alt="kuchvi" className="w-auto h-auto mix-blend-multiply" />
                <div className="About_right w-2/4">
                    <div className="about_heading text-4xl font-medium">All Free Standard Books </div>
                    <div className="about_description text-xl mt-5">
                        We are Providing the standard books pdf copies of engineering free and easy. And we also Providing the Notes and Previous Year Question in it with the toppers notes and etc...
                        <br /><br />
                        All Resources are free and no time limited you can download or read it here without downloading. there is all tabs in menu that can navigate to the books and notes you can search all notes and book pdf and enjoy reading.
                        <br /><br />
                        we also providing the self help books and other courses books in it that helps you to be a pro programmer...
                    </div>
                </div>
            </div>


            <div className="About w-10/12 mt-10 h-auto flex justify-around items-center">
                <div className="About_right w-2/5">
                    <div className="about_heading text-4xl font-medium">Sit & Read Your Loved Book </div>
                    <div className="about_description text-xl mt-5">
                        Sit and enjoy your E-library feature with us. we provide you all the needed books by your suggestion so not forget to have a message for needed book to us...
                        <br /><br />
                        We are trying our best to provide you all needed books if there is any book unavailable then just ping us and we will add this within 2-3 days...
                    </div>
                </div>
                <img src={img3} alt="kuchvi" className="w-auto h-auto mix-blend-multiply" />
            </div>


            <div className="About w-11/12 mt-10 h-auto flex justify-around items-center">
                <img src={img4} alt="kuchvi" className="w-auto h-auto mix-blend-multiply" />
                <div className="About_right w-2/4">
                    <div className="about_heading text-4xl font-medium">We are Adding New Technologies</div>
                    <div className="about_description text-xl mt-5">
                        We are added the text to speech in the book sections and researching about new features on the book and notes so that you can get a smooth usability and features...
                        <br /><br />
                        we are doing our best on the developing the features on the website and if you find any new feature can be added here then have a message to us..
                        <br /><br />
                        Happy reading...
                    </div>
                </div>
            </div>


        </>
    )
}

export default About