import axios from "axios"
import { useEffect, useState } from "react"

const useResidents = () => {
    const [response, setResponse] = useState()

    useEffect(() => {
        axios.get(URL)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))        
    }, [])
    
    return {response}
}

export default useResidents
