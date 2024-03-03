import Header from "./components/Header"
import Home from './pages/Home';
import History from './pages/History';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";


const abortController: any = new AbortController();

function App() {

  //states
  const [query, setQuery] = useState('')
  const [popularImg, setPopularImg] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])
  const [page, setPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('popular')
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  //API
  const API_KEY = 'PS42lTr_bUk9aFQuXpup3MgIBUQ9EhDcOCwlccrOHnU';
  const BASE_URL = 'https://api.unsplash.com/';
  const popularURL = `${BASE_URL}photos?page=${page}&per_page=20&order_by=popular&client_id=${API_KEY}`
  const searchURL = `${BASE_URL}search/photos?query=${query}&page=${page}&per_page=20&client_id=${API_KEY}`

  //popular image fetching
useEffect( () => {
  setIsLoading(true)

  const fetchData = async () => {
    const response = await fetch(popularURL, abortController.signal)
    const popularData = await response.json()
    setPopularImg([...popularImg, ...popularData])
    setIsLoading(false)
  }
  if ( status === 'popular') fetchData()
  abortController.abort();
}, [popularPage, status])


//searched image fetching  
useEffect( () => {
  if (query.length < 2) setStatus('popular')
  if (query.length < 2) setImages([])
  
  setIsLoading(true)

  const fetchData = async () => {
    const response = await fetch(searchURL, abortController.signal)
    const searchData = await response.json()
    setImages([...images, ...searchData.results])
    setSearchHistory([...searchHistory, query]);
    setIsLoading(false)
  }
  const timeoutId = setTimeout(() => {
        fetchData();
      }, 1000);
  
    return () => {
      clearTimeout(timeoutId);
      abortController.abort();
    };

}, [page, query])


//infinity scroll
useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.scrollHeight
    ) {
      if (status === 'popular') setPopularPage(popularPage + 1  )
      setPage(page + 1);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [page]);

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/history" element={<History 
                                          searchHistory={searchHistory} 
                                          images={images} 
                                          isLoading={isLoading}
                                          setQuery={setQuery}
                                          setImages={setImages}
                                          popularImg={popularImg}
                                          status={status}
                                          />}/>           
          <Route path="/" element={<Home  query={query} 
                                          setQuery={setQuery} 
                                          popularImg={popularImg} 
                                          images={images}     
                                          isLoading={isLoading} 
                                          status={status} 
                                          setStatus={setStatus}
                                          modalOpen={modalOpen}
                                          setModalOpen={setModalOpen}
                                          selectedImage={selectedImage}
                                          setSelectedImage={setSelectedImage}
                                 />}/>          
        </Routes>
        <ScrollToTop/>
      </div>
    </BrowserRouter>
  )
}

export default App
