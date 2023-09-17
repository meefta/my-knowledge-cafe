
import {  useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([])
  const handleAddToBookmarks = blog =>{
    console.log('adding bookmarks soon')
  }
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarks ={handleAddToBookmarks}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
