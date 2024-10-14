import btl from '@assets/icons/btl.png'
import Task from '@components/task/task'

const Tasks = () => {
  return (
    <section className='open-scale h-full bg-biege-gradient-horizontal rounded-[12px]'>
      <div className='h-[57px] px-[20px] flex items-center relative'>
        <div className='text-[16px] relative z-10 flex items-center gap-[3px]'>
          <p className='text'>Complete Tasks</p>
          <p className='text text-secondary'>and earn</p>
          <p className='text text-orange'>Tokens</p>
          <img className='w-[18px] h-[18px] relative mt-[3px]' src={btl} alt='btl' />
        </div>
        <div className='absolute bg-biege-gradient-horizontal-1 w-full h-[2px] left-0 bottom-0' />
      </div>

      <div className='h-[calc(100%-57px)] px-[20px] pt-[16px] overflow-y-scroll no-scrollbar flex flex-col gap-[24px]'>
        <Task reward={120} name='Ad text' />
        <Task reward={40} name='Ad text ad text ad text' />
        <Task reward={60} name='Ad text' />
        <Task reward={80} name='Ad text ad text ad text' />
        <Task reward={90} name='Ad text' />
        <Task reward={120} name='Ad text ad text ad textsefsefef' />
        <Task reward={60} name='Ad text' />
        <Task reward={80} name='Ad text ad text ad text' />
        <Task reward={90} name='Ad text' />
        <Task reward={120} name='Ad text ad text ad textsefsefef' />
      </div>
    </section>
  )
}

export default Tasks
