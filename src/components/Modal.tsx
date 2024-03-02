import { useEffect, useState } from "react";
import view from "../assets/view.svg"
import download from "../assets/download.svg"
import like from "../assets/like.svg"
import { ModalProps } from "../types";

const API_KEY = 'PS42lTr_bUk9aFQuXpup3MgIBUQ9EhDcOCwlccrOHnU';
const BASE_URL = 'https://api.unsplash.com/';

const Modal = ({modalOpen, selectedImage, setModalOpen}: ModalProps) => {
  
    if (!modalOpen || !selectedImage) {
        return null;
      }
    const [statistics, setStatistics] = useState<any>({}) 

    useEffect( () => {
      const fetchData = async (id: string) => {         
        const response = await fetch(`${BASE_URL}photos/${id}/statistics?client_id=${API_KEY}`)
        const statisticshData = await response.json()
        setStatistics(statisticshData)
      };
      fetchData(selectedImage.id)
    },[selectedImage])  
  
      return (
        <div className="modal">
          <div className='modal-window'>
            <img className='modal-img' src={selectedImage.urls.full} alt={selectedImage.alt_description} />
            <div className='modal-stats'>
              <p><img src={download} alt="download" /> <strong>{statistics?.downloads?.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></p>
              <p><img src={view} alt="view" /> <strong>{statistics?.views?.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></p>
              <p><img src={like} alt="like" /> <strong>{selectedImage.likes}</strong></p>
            </div>
            <button className='modal-btn' onClick={() => setModalOpen(false)}>&#10005;</button>
          </div>
        </div>
      );
  
}

export default Modal