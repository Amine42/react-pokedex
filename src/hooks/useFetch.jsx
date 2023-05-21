import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {
  const cache = useRef({})
  const [status, setStatus] = useState('unloaded')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      setStatus('loading')
      if (cache.current[url]) {
        const data = cache.current[url]
        setData(data)
        setStatus('loaded')
      } else {
        const response = await fetch(url)
        const data = await response.json()
        cache.current[url] = data
        setData(data)
        setStatus('loaded')
      }
    }

    fetchData()
  }, [url])

  return [status, data]
}

export default useFetch
