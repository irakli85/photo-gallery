import arrow from '../assets/arrow.svg';

const ScrollToTop = () => {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }   
    
  return (            
       <div className='scroll-to-top' onClick={handleClick}>
           <img src={arrow} alt="arrow"/>
       </div>        
    )    
}

export default ScrollToTop