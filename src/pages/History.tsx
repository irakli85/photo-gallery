import Loader from "../components/Loader";
import { HistoryProps } from "../types";

const History = ({searchHistory, images, isLoading, setQuery, setImages, popularImg, status}: HistoryProps ) => {

    //unique data filtering function
    function onlyUnique(value: string, index: number, array: string[]) {
        return array.indexOf(value) === index;
      }

      const handleClick = (query: string) => {
        setQuery(query)
        setImages([])
      }

  return (
    <div>
      <h1 className="history-heading">Search History</h1>
      <ul className="history-list">
        {searchHistory.filter(onlyUnique).map((query: string, index: number) => (
          <li key={index} onClick={() => handleClick(query)}>{query}</li>
        ))}
      </ul>
      <div className='img-container'>
          { status === 'popular' ? (
              popularImg?.map((image: any) => (
                <div className="image-box" key={crypto.randomUUID()}>
                    <img className='image'                            
                        src={image.urls.small}
                        alt={image.alt_description}                            
                    />
                    <p>Photo By <strong className="name">{image.user.name}</strong></p>
                </div>
                ))
          )
          :
         ( images?.map((image: any) => (
              <div className="image-box" key={crypto.randomUUID()}>
                  <img className='image'                            
                      src={image.urls.small}
                      alt={image.alt_description}                            
                  />
                  <p>Photo By <strong className="name">{image.user.name}</strong></p>
              </div>
              )))}
          {isLoading && <Loader/>}    
      </div>
    </div>
  )
}

export default History