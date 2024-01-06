import { useEffect, useState } from "react"

const useDetails = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                return setData(data)

            })
            .catch(error => console.log('error fetching vans:', error))

    }, [url])

    return { data }
}

export default useDetails;