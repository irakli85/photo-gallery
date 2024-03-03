import { useRef } from "react"
import search from "../assets/search.svg"
import Images from "../components/Images"
import Modal from "../components/Modal"
import { useKey } from "../hooks/useKey"
import { HomeProps } from "../types"

const Home = ({query,
               setQuery,
               images,
               isLoading,
               setStatus,
               popularImg,
               status,
               modalOpen,
               setModalOpen,
               selectedImage,
               setSelectedImage}: HomeProps) => {

  const inputEl = useRef<HTMLInputElement>(null)


//focusing on input element when clicked Enter button
  useKey('Enter', () => {
    if(document.activeElement === inputEl.current) return
    if (inputEl.current !== null) {
      inputEl.current.focus()
    }
    setQuery('')
  }) 

  const handleQuery = (e: any) => {
    setQuery(e.target.value)
    setStatus('searching')
  }  

  return (
    <div className='home'>
        <h1 className='heading'>Modern Photo Gallery</h1>
        <p className="home_sub-title">Experience the Photo Gallery – a place where your snapshots come to life, beautifully framed in albums. Be the curator of your own world, selecting the best shots and storing them in History, ready to be revealed at your command.</p>
        <div className="search-container">
            <input className='search'
                type="text"
                value={query}
                onChange={handleQuery}
                placeholder='Search here...'
                ref={inputEl}
            />
            <img className="search-img" src={search} alt="search image" />   
        </div>
        <Images popularImg={popularImg} images={images} isLoading={isLoading} status={status} setSelectedImage={setSelectedImage} setModalOpen={setModalOpen}/>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedImage={selectedImage}/>
        
    </div>
  )
}

export default Home