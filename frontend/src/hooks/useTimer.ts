import { useState, useEffect } from 'react'

const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const hours = Math.floor(prevTime / 3600)
        const minutes = Math.floor((prevTime % 3600) / 60)
        const seconds = prevTime % 60

        if (prevTime <= 0) {
          clearInterval(intervalId)
          return 0
        }

        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${hours}:${minutes}:${secs}`
  }

  return formatTime(time)
}

export default useTimer
