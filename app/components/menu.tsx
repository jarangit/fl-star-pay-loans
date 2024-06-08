import React from 'react'
import Row from './elements/row'
import Image from 'next/image'

type Props = {}

const menus = [
  {
    title: 'Home',
    url: ''
  },
  {
    title: 'Why StarPay?',
    url: ''
  },
  {
    title: 'Loan Examples',
    url: ''
  },
  {
    title: 'FAQ',
    url: ''
  },
]
const Menus = (props: Props) => {
  return (
    <div className=' bg-yellowLight '>
      <Row className='  my-container items-center w-full justify-between
     !py-4 '>
        <div>
          <Image
            src={'/images/logo.png'}
            alt=''
            width={150}
            height={150}
          />
        </div>
        <div>
          <Row gap={3} className='gap-8'>
            <>
              {menus.map((item, key) => (
                <div key={key} className='font-medium cursor-pointer transition-all hover:opacity-50'>{item.title}</div>
              ))}
            </>

            <button className='text-yellowLight font-bold bg-darkNavy p-2 rounded-full px-6'>
              GET A LOAN
            </button>
          </Row>
        </div>
      </Row>
    </div>
  )
}

export default Menus