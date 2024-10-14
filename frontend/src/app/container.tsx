import { PropsWithChildren } from "react"


const Container = ({ children }: PropsWithChildren) => {
  return <div className='h-[calc(100vh-96px-86px)] px-[20px] pb-[22px] flex flex-col'>
    {children}
  </div>
}

export default Container
