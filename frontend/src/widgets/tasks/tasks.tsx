import btl from '@assets/icons/btl.png'
import Task from '@components/task/task'

const Tasks = () => {
  return (
    <section className='open-scale h-full bg-biege-gradient-horizontal rounded-[.75rem]'>
      <div className='h-[3.5625rem] px-[1.25rem] flex items-center relative'>
        <div className='text-[1rem] relative z-10 flex items-center gap-[.21rem]'>
          <p className='text'>Complete Tasks</p>
          <p className='text text-secondary'>and earn</p>
          <p className='text text-orange'>Tokens</p>
          <img className='w-[1.125rem] h-[1.125rem] relative mt-[.1875rem]' src={btl} alt='btl' />
        </div>
        <div className='absolute bg-biege-gradient-horizontal-1 w-full h-[.125rem] left-0 bottom-0' />
      </div>

      <div className='h-[calc(100%-3.5625rem)] px-[1.25rem] pt-[1rem] overflow-y-scroll no-scrollbar flex flex-col gap-[1.5rem]'>
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

        <div class="w-full absolute bottom-0 left-0 h-[2.5rem] rounded-[.625rem] bg-gradient-to-t from-[rgba(30,29,26,0.44)] to-[rgba(30,29,26,0)]" />
      </div>
    </section>
  )
}

export default Tasks
