import friends from '@assets/icons/friends.png'
import ReferalFriend from '@components/referalFriend/referalFriend'

const Referals = () => {
  return (
    <section className='open-scale w-full mt-[1rem] h-[calc(100%-8.75rem)] bg-biege-gradient-horizontal rounded-[.75rem] overflow-hidden shadow-[0_-0.125rem_0_var(--color-biege-light-1)]'>
      <div className='h-[3.5625rem] px-[1.25rem] flex items-center relative gap-[.75rem]'>
        <img className='w-[1.625rem] h-[1.625rem]' src={friends} alt='people' />
        <p className='text text-[1rem] relative z-10'>
          <span className='text-secondary'>Total Referrals:</span>
          <span> 103</span>
        </p>
        <div className='absolute bg-biege-gradient-horizontal-1 w-full h-[.125rem] left-0 bottom-0' />
      </div>

      <div className='h-[calc(100%-3.5625rem)] overflow-y-scroll no-scrollbar'>
        <ReferalFriend isHaveReward={false} progress={100} earned={856.5} isCompleted={false} isTaken={true} />
        <ReferalFriend isHaveReward={true} progress={50} earned={856.5} isCompleted={false} isTaken={false} />
        <ReferalFriend isHaveReward={true} progress={50} earned={856.5} isCompleted={false} isTaken={false} />
        <ReferalFriend isHaveReward={true} progress={50} earned={856.5} isCompleted={false} isTaken={false} />

        <div class="w-full absolute bottom-0 left-0 h-[2.5rem] rounded-[.625rem] bg-gradient-to-t from-[rgba(30,29,26,0.44)] to-[rgba(30,29,26,0)]" />
      </div>
    </section>
  )
}

export default Referals
