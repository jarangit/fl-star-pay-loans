import React from 'react'
import Column from '../elements/column'
import Image from 'next/image'

type Props = {}

const list = [
  {
    title: 'StarPayLoans is awesome!',
    detail: `Their application service was easy and only took a few moments to get my lo....`
  },
  {
    title: 'Instantly approved! So Great!',
    detail: `My application took minutes and I got my etransfer so fast! Thanks guys!`
  },
  {
    title: 'Super Happy Returning Customer!',
    detail: `I have used StarPayLoans in the past and they keep things simple. I highly recom....`
  },
]

const Why = (props: Props) => {
  return (
    <div className=''>
      <Column className='my-container !py-24 gap-12'>
        <div className='font-bold text-4xl text-center'>
          Why Canadians Choose <span className='text-secondary'>StarPayLoans
          </span>
        </div>
        <div className='border border-gray rounded-lg py-12 px-10 gap-6 shadow-lg grid grid-cols-1 md:grid-cols-4'>
          <Column className='items-center gap-2'>
            <div className='text-3xl'>Excellent</div>
            <Image
              src={'/images/star.svg'}
              alt=''
              width={200}
              height={200}
            />
            <div className='text-sm'>Based On <span className='underline'>200+ reviews</span></div>
            <Image
              src={'/images/trust-icon.png'}
              alt=''
              width={200}
              height={200}
            />
          </Column>
          {list.map((item, key) => (
            <div key={key}>
              <Column className='gap-2'>
                <Image
                  src={'/images/star.svg'}
                  alt=''
                  width={150}
                  height={150}
                />
                <div className='font-semibold'>{item.title}</div>
                <div>{item.detail}</div>
              </Column>
            </div>
          ))}
        </div>
        <div className='text-center'>{`Since 2021, we've helped hundreds of Canadians in emergency situations.
`}</div>
      </Column>
    </div>
  )
}

export default Why