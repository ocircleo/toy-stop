import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(() => {
       document.title = `Toy Stop |  ${title}`
   },[title])
};

export default useTitle;