import React from 'react'
import "./styles/Home.scss"

import sittingimage from "./res/study-education-concept-d-illustration-nerd-larry-book-202165458-transformed 1.svg"
import Nav from "./Nav"
import About from "./About"
import Footer from "./Footer"

const Home = () => {
    return (
        <>
            <Nav value={1} />
            <div className="Home flex w-11/12 py-3 px-7 justify-around items-center mt-8  shadow-slate-300 shadow-2xl bg-white rounded-2xl">
                <div className="LeftHome w-3/5 h-full z-10">
                    <div className="Heading min-w-min pl-10 py-20 text-slate-600 flex flex-col z-40">
                        <span className='text-6xl font-semibold leading-tight'>
                            Open Your <span className="text-yellow-400"> Mind</span> To <br />
                            <span className="text-orange-600">Endless</span> <br />
                            Possibilities... <br />
                        </span>
                        <div className="description text-xl font-medium ml-1 mt-3">Made by <span className="text-yellow-400">Engineers</span>....... for future <span className="text-yellow-400">Engineers</span>........</div>
                        {/* Buttons */}
                        <div className="buttonDiv flex gap-7 mt-16 pb-16 ml-1">
                            <div className="button1 px-4 py-1.5 bg-orange-600 rounded-md flex items-center justify-center gap-2 text-white">
                                <span className='flex items-center justify-center text-xl' ><ion-icon name="book-outline"></ion-icon></span>Get Books
                            </div>
                            <div className="button1 px-4 py-1.5 border-2 border-orange-600 rounded-md">
                                Suggest Books
                            </div>
                        </div>
                    </div>
                </div>
                <img className='RightHome w-auto mix-blend-multiply z-50 ' src={sittingimage} alt="Book" />
            </div>
            {/* <div className="Counter w-9/12 h-40 bg-gray-100 shadow-2xl rounded-2xl -mt-12"></div> */}

            <About/>
            <Footer/>
        </>
    )
}

export default Home