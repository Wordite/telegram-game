import friends from '@assets/icons/friends.png'
import ReferalFriend from '@components/referalFriend/referalFriend'

const Referals = () => {
  return (
    <section className='open-scale w-full mt-[16px] h-[calc(100%-140px)] bg-biege-gradient-horizontal rounded-[12px] overflow-hidden shadow-[0_-2px_0_var(--color-biege-light-1)]'>
      <div className='h-[57px] px-[20px] flex items-center relative gap-[12px]'>
        <img className='w-[26px] h-[26px]' src={friends} alt='people' />
        <p className='text text-[16px] relative z-10'>
          <span className='text-secondary'>Total Referrals:</span>
          <span> 103</span>
        </p>
        <div className='absolute bg-biege-gradient-horizontal-1 w-full h-[2px] left-0 bottom-0' />
      </div>

      <div className='h-[calc(100%-57px)] overflow-y-scroll no-scrollbar'>
        <ReferalFriend progress={50} earned={856.5} isCompleted={false} />
        <ReferalFriend progress={50} earned={856.5} isCompleted={false} />
        <ReferalFriend progress={50} earned={856.5} isCompleted={false} />
        <ReferalFriend progress={50} earned={856.5} isCompleted={false} />
      </div>
    </section>
  )
}

export default Referals
