import { useEffect } from "react";

export function useKey (key: string, action: any) {
    useEffect( () => {
        const callback = (e: any) => {
          if(e.code.toLowerCase() === key.toLowerCase()){
            action()
          }
        }
        document.addEventListener('keydown', callback)
        return () => document.removeEventListener('keydown', callback)
      }, [action, key])
    
}