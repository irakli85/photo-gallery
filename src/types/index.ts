export interface HomeProps {
    query: string;
    setQuery: (query: any) => void;
    images: string[];
    isLoading: boolean;
    setStatus: (status: any) => void;
    popularImg: string[];
    status: string;
    modalOpen: boolean;
    setModalOpen: (modalOpen: any) => void;
    selectedImage: any;
    setSelectedImage:(selectedimage: any) => void;   
}

export interface HistoryProps {
    searchHistory: string[];
    images: string[];
    isLoading: boolean;
    setQuery: (query: any) => void;
    setImages: (images: any) => void;
    popularImg: string[];
    status: string;   
}



export interface ImgProps {
    image: any;
    setSelectedImage:(selectedimage: any) => void;   
    setModalOpen: (modalOpen: any) => void;
}

export interface ImagesProps {
    images: string[];
    isLoading: boolean;
    popularImg: string[];
    status: string;
    setSelectedImage:(selectedimage: any) => void; 
    setModalOpen: (modalOpen: any) => void;
}

export interface ModalProps {
    modalOpen: boolean;
    selectedImage: any;
    setModalOpen: (modalOpen: any) => void;    
}




