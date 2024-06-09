"use client"; // This is a client component 

import React from 'react'
import Row from './elements/row'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/components/navigation';

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
  const { push } = useRouter()

  return (
    <div className=' bg-main '>
      <Row className='  my-container items-center w-full justify-between
     !py-4 '>
        <div onClick={() => push('/')} className='cursor-pointer'>
          <Image
            src={'/images/logo.png'}
            alt=''
            width={150}
            height={150}
          />
        </div>
        <div>
          <Row gap={3} className='gap-8 hidden md:flex'>
            {menus.map((item, key) => (
              <div key={key} className='font-medium cursor-pointer transition-all hover:opacity-50'>{item.title}</div>
            ))}
            <a href="/form-loan">
              <button onClick={() => push('/form-loan')} className='text-white font-bold bg-text p-2 rounded-full px-6'>
                GET A LOAN
              </button>
            </a>
          </Row>
        </div>
      </Row>
    </div>
  )
}

export default Menus