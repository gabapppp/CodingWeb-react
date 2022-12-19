import React from 'react'

function PlanCard() {
  return (
    <>
    <div className='flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8 bg-emerald-200'>
      <h2 className='mb-5 text-xl font-medium'>Basic</h2>
      <div className='mb-5 flex items-end text-6xl font-black'>
        Free
      </div>
      <p className='mb-5'>Get started with the basic plan</p>
      <ul className='mb-10 flex flex-col gap-y-2'>
        <li className='flex items-center'>1 - Unlimited project</li>
        <li className='flex items-center'>2 - Free Storage 500MB</li>
        <li className='flex items-center'>3 - 500MB memory</li>
      </ul>
      <button className='mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white '>Started Free Plan</button>
    </div>


    <div className='flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8 bg-rose-300'>
      <h2 className='mb-5 text-xl font-medium'>Pro</h2>
      <div className='mb-5 flex items-end text-6xl font-black'>
        10$/m
      </div>
      <p className='mb-5'>Get started with the Pro plan</p>
      <ul className='mb-10 flex flex-col gap-y-2'>
        <li className='flex items-center'>1 - Unlimited project</li>
        <li className='flex items-center'>2 - Storage 1GB</li>
        <li className='flex items-center'>3 - 1GB memory</li>
      </ul>
      <button className='mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white '>Started Pro Plan</button>
    </div>



    <div className='flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8 bg-purple-400'>
      <h2 className='mb-5 text-xl font-medium'>Promax</h2>
      <div className='mb-5 flex items-end text-6xl font-black'>
        30$/m
      </div>
      <p className='mb-5'>Get started with the Promax plan</p>
      <ul className='mb-10 flex flex-col gap-y-2'>
        <li className='flex items-center'>1 - Unlimited project</li>
        <li className='flex items-center'>2 - Storage 2GB</li>
        <li className='flex items-center'>3 - 2GB memory</li>
      </ul>
      <button className='mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white '>Started Promax Plan</button>
    </div>
    </>
  )
}

export default PlanCard