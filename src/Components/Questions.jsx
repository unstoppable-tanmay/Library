import React from 'react'

import "./Css/Questions.scss"

import Nav from "./Nav"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Questions = () => {
  return (
    <>
      <Nav />
      <div className="Questions">
        <img className="Background" src='https://i.gifer.com/embedded/download/4DAq.gif' alt="df" />
        <div className="QuestionContent">
          <div className="Heading">#Questions</div>
          <div className="SelectData">
            <div className="selects">
              <select name="" id="">
                <option value="">Branch</option>
                <option value="tanmay">CSE</option>
                <option value="tanmay">MECHANICAL</option>
                <option value="tanmay">ELECTRICAL</option>
                <option value="tanmay">CIVIL</option>
              </select>
              <select name="" id="">
                <option value="">Semester</option>
                <option value="tanmay">1st</option>
                <option value="tanmay">2nd</option>
                <option value="tanmay">3rd</option>
                <option value="tanmay">4th</option>
                <option value="tanmay">5th</option>
                <option value="tanmay">6th</option>
                <option value="tanmay">7th</option>
              </select>
              <select name="" id="" placeholder='tanmay'>
                <option value="">Exam</option>
                <option value="tanmay">1st Internal</option>
                <option value="tanmay">2nd Internal</option>
                <option value="tanmay">semester</option>
              </select>
            </div>
            <div className="Button">FInd</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Questions