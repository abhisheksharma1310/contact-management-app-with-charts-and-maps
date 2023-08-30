import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
const usePaths = () =>{

    const location = useLocation();
    const [name, setName] = useState('');
    
    useEffect(() => {
        const path = location.pathname.split('/');
        if(path[1] === "" || path[1] === "contact"){
            setName('Contact Page');
        } else if(path[1] === 'dashboard'){
            setName('Charts and Maps')
        } else {
            setName('Error')
        }
    }, [location])

    //return path name
    return name;
}

export default usePaths;