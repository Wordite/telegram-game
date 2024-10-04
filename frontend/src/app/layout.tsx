import React, { PropsWithChildren, useEffect } from 'react'
import TopMenu from '@widgets/topMenu/topMenu'
import init from './init'
import BottomNavigation from '@widgets/bottomNavigation/bottomNavigation'
import Background from '@widgets/background/Background'

const Layout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    init()
  }, [])

  return (
    <main className='h-screen'>
      <Background />
      <TopMenu />
      <div className='h-[calc(100dvh-96px-86px)] px-[20px] pb-[22px] flex flex-col'>
        {children}
      </div>
      <BottomNavigation />
    </main>
  )
}

export default React.memo(Layout)
