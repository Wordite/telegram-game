import background from '@assets/images/background.png'
import React from 'react'

const Background = () => {
  return (
    <img className='w-screen h-[calc(100dvh-70px)] absolute -z-50 object-cover' src={background} alt='bg' />
  )
}

export default React.memo(Background)