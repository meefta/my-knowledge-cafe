
import {  useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([])
  const [readingTime , setReadingTime] = useState(0)

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks);
  }
  const handleReadingTime = time =>{
    setReadingTime(readingTime + time)
  }
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleReadingTime={handleReadingTime} handleAddToBookmarks ={handleAddToBookmarks }></Blogs>
      <Bookmarks readingTime = {readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
