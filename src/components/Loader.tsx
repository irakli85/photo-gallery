import loaderPic from '../assets/loader.gif'

const Loader = () => {
  return (
    <div className='loader-bottom'>
        <img className='loader-img' src={loaderPic} alt="loader" />
    </div>
  )
}

export default Loader