import { PropsWithChildren } from "react"


const Container = ({ children }: PropsWithChildren) => {
  return <div className='h-[calc(100vh-6.875rem-5.375rem)] px-[1.25rem] pb-[1.375rem] flex flex-col'>
    {children}
  </div>
}

export default Container
