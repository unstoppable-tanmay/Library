import React, { useState, useEffect, useMemo } from 'react'
import { useAppContext } from "../contextLib";
// Css
import "./Css/Books.scss"
import "./Css/BookAnimation.scss"
// Nav
import Nav from "./Nav"
// Modules
import Chip from '@mui/material/Chip';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { ButtonBase } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import ScrollToBottom from 'react-scroll-to-bottom';


const Star = (props) => {
  return (<>
    {props.star > 1 ? <StarRoundedIcon fontSize={props.size} sx={{ color: props.color }} /> : <StarRoundedIcon fontSize={props.size} sx={{ color: props.color + "40" }} />}
    {props.star > 2 ? <StarRoundedIcon fontSize={props.size} sx={{ color: props.color }} /> : <StarRoundedIcon fontSize={props.size} sx={{ color: props.color + "40" }} />}
    {props.star > 3 ? <StarRoundedIcon fontSize={props.size} sx={{ color: props.color }} /> : <StarRoundedIcon fontSize={props.size} sx={{ color: props.color + "40" }} />}
    {props.star > 4 ? <StarRoundedIcon fontSize={props.size} sx={{ color: props.color }} /> : <StarRoundedIcon fontSize={props.size} sx={{ color: props.color + "40" }} />}
    {props.star > 5 ? <StarRoundedIcon fontSize={props.size} sx={{ color: props.color }} /> : <StarRoundedIcon fontSize={props.size} sx={{ color: props.color + "40" }} />}
  </>
  )
}

const Books = (props) => {
  const { data, isLoading, setIsLoading, search, setSearch } = useAppContext()
  const TrendingsBookData = data;
  const [openBook, setOpenBook] = useState(false);
  const [openedBook, setOpenedBook] = useState(null);
  const [filter, setFilter] = useState({ civil: false, mechanical: false, electrical: false, cse: false, one: false, two: false, three: false, four: false, five: false, six: false, seven: false });

  var BookData = data.filter((item) =>
  (!(filter.civil || filter.electrical || filter.mechanical || filter.cse || filter.one || filter.two || filter.three || filter.four || filter.five || filter.six || filter.seven) ? true :
    ((filter.civil && item.branch === "CE") ||
      (filter.electrical && item.branch === "EE") ||
      (filter.cse && item.branch === "CSE") ||
      (filter.mechanical && item.branch === "ME") ||
      (filter.one && item.semester === "1") ||
      (filter.two && item.semester === "2") ||
      (filter.three && item.semester === "3") ||
      (filter.four && item.semester === "4") ||
      (filter.five && item.semester === "5") ||
      (filter.six && item.semester === "6") ||
      (filter.seven && item.semester === "7"))
  )
  )


  // ? Trendings Book
  const TrendingBooks = (props) => {
    return (
      <div className="TrendingBooks" style={{ background: "#" + props.val.color }} onClick={() => { setOpenBook(true); setOpenedBook(props.val) }}>
        <img src={props.val.image} alt="hello" className="book" />
        <div className="Content">
          <div className="Heading">{props.val.name}</div>
          <div className="Author">{props.val.author}</div>
          <div className="Stars">
            <Star star={props.val.star + 1} color="#ffffff" fontSize="large" />
          </div>
          <div className="Des">{props.val.description}</div>
        </div>
      </div>
    )
  }
  // ? Browse Books
  const BrowseBooks = (props) => {
    return (
      <div className="BrowseBooks" onClick={() => { setOpenBook(true); setOpenedBook(props.val) }}>
        <img src={props.val.image} alt="hello" className="book" />
        <div className="Content">
          <div className="Heading">{props.val.name}</div>
          <div className="Author">{props.val.author}</div>
          <div className="Stars">
            <Star star={props.val.star + 1} color={"#" + props.val.color} size="small" />
          </div>
        </div>
      </div>
    )
  }
  // ? Open Book PopUp 
  const OpenBook = () => {
    return (
      <ScrollToBottom>
      {/* <Slide direction="up" in={openBook}> */}
        <Modal
          open={openBook}
          onClose={() => { setOpenBook(false); setOpenedBook(null) }}
          className="BookModalHolder"
        >
          {openedBook !== null ? (
            <div className="OpenBook">
              <span className="ClosedBookOpen" onClick={() => { setOpenBook(false); setOpenedBook(null) }}><CloseIcon /></span>
              <div className="OpenBookData">
                <div className="Book">
                  <img src={openedBook.image} alt="hello" className="img" />
                </div>
                <div className="Data">
                  <div className="flex">
                    <Chip label={openedBook.branch} size="small" color="default" />
                    <Chip label={openedBook.semester + " sem"} size="small" color="default" />
                  </div>
                  <div className="Heading">{openedBook.name}</div>
                  <div className="Author">~ {openedBook.author}</div>
                  <div className="Des">{openedBook.description}</div>
                  <div className="Stars">
                    <Star star={openedBook.star + 1} color={"#" + openedBook.color} fontSize="large" />
                  </div>
                  <div className="DetailsContainer">
                    <div className="Size">
                      {openedBook.size ? openedBook.size + " MB" : "Not There"}
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className="Pages">
                      {openedBook.pages ? openedBook.pages + " Pages" : "Not There"}
                    </div>
                  </div>
                  <div className="ButtonGroup">
                    <div className="SaveBtn"><BookmarkRoundedIcon /></div>
                    <Button variant="contained" startIcon={<FileDownloadRoundedIcon  />}>
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : <>Tanmay</>}
        </Modal>
        {/* </Slide> */}
      </ScrollToBottom>
    )
  }


  return (
    isLoading ? (
      <>
        <Nav />
        <div className="Loader">
          <img src="https://i.pinimg.com/originals/5b/f0/a3/5bf0a3e0601d35349c5451fa52138ea6.gif" alt="" />
        </div>
      </>
    ) : (
      <>
        <OpenBook />
        <Nav />
        <div className="Books">
          {search ? (<>

          </>) : (
            <>
              <div className="Heading">Trendings</div>
              <br />
              <div className="Trendings">
                {TrendingsBookData.map((val, ind) => {
                  return (
                    <span className={`slide-${ind}`} key={ind}>
                      <ButtonBase><TrendingBooks className={`slide-${ind + 1}`} val={val} /></ButtonBase>
                    </span>
                  )
                })}
              </div>
            </>
          )}
          <br />
          <div className="AllBooks">
            <div className="BooksContainer">
              <div className="Heading">For You</div>
              {BookData.map((val, ind) => {
                return (
                  <ButtonBase key={ind}><BrowseBooks val={val} /></ButtonBase>
                )
              })}
            </div>
            <br />
            <div className="BooksFilter">
              {/* <div className="Heading">Filters</div> */}
              <div className="ChipGroup">
                {/* <div className="semiHeading">Branch</div> */}
                <Chip color={filter.civil ? "primary" : "default"} onClick={() => { setFilter({ ...filter, civil: !filter.civil }) }} label="Civil" />
                <Chip color={filter.electrical ? "primary" : "default"} onClick={() => { setFilter({ ...filter, electrical: !filter.electrical }) }} label="Electrical" />
                <Chip color={filter.mechanical ? "primary" : "default"} onClick={() => { setFilter({ ...filter, mechanical: !filter.mechanical }) }} label="Mechanical" />
                <Chip color={filter.cse ? "primary" : "default"} onClick={() => { setFilter({ ...filter, cse: !filter.cse }) }} label="Computer Science" />
                {/* <span className="semiHeading">Semester</span> */}
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Chip color={filter.one ? "primary" : "default"} onClick={() => { setFilter({ ...filter, one: !filter.one }) }} label="1st Semester" />
                <Chip color={filter.two ? "primary" : "default"} onClick={() => { setFilter({ ...filter, two: !filter.two }) }} label="2nd Semester" />
                <Chip color={filter.three ? "primary" : "default"} onClick={() => { setFilter({ ...filter, three: !filter.three }) }} label="3rd Semester" />
                <Chip color={filter.four ? "primary" : "default"} onClick={() => { setFilter({ ...filter, four: !filter.four }) }} label="4th Semester" />
                <Chip color={filter.five ? "primary" : "default"} onClick={() => { setFilter({ ...filter, five: !filter.five }) }} label="5th Semester" />
                <Chip color={filter.six ? "primary" : "default"} onClick={() => { setFilter({ ...filter, six: !filter.six }) }} label="6th Semester" />
                <Chip color={filter.seven ? "primary" : "default"} onClick={() => { setFilter({ ...filter, seven: !filter.seven }) }} label="7th Semester" />
              </div>
            </div>
          </div>
        </div>
      </>
    )

  )
}

export default Books