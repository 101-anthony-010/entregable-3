import axios from "axios";
import { useEffect, useState } from 'react'

const useLocation = (URL) => {
    const [response, setResponse] = useState()

    useEffect(() => {
      axios.get(URL)
        .then((res) => setResponse(res.data))
        .catch((err) => console.log(err))
    }, [])
    return {response}
}

export default useLocation
