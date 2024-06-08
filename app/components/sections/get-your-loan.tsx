import React from 'react'
import Column from '../elements/column'
import Row from '../elements/row'
import Image from 'next/image'

type Props = {}

const list = [
  {
    title: 'Apply online',
    detail: `Getting a loan with StarPayLoans is very easy. Apply on our website using the Instant Banking Verification and your personal details.

`,
    image: '/images/apply.png'
  },
  {
    title: 'Instant approval',
    detail: `Our team will contact you by phone or email once your application is fully approved. This process takes about 25 minutes.

`,
    image: '/images/approve.png'
  },
  {
    title: `Get your funds
`,
    detail: `After signing your digital contract, your funds will be sent by e-Transfer within 5 minutes. Our process is fast and efficient.
`,
    image: '/images/coin.png'
  },
]
const GetYourLoan = (props: Props) => {
  return (
    <div className='bg-yellowLight py-12'>
      <Column className='my-container gap-12'>
        <div className='font-bold text-4xl text-center'>
          Get your loan in <span className='text-yellow'>3 easy steps</span>
        </div>
        {/* list */}
        <Row className='gap-6 flex-wrap justify-center'>
          <>
            {list.map((item, key) => (
              <div key={key}>
                <Column className=' bg-white rounded-lg shadow-lg py-12 p-12 text-center items-center gap-4 max-w-[400px]'>
                  <Image
                    src={item.image}
                    alt=''
                    width={100}
                    height={100}
                  />
                  <div className='font-bold text-2xl'>{item.title}</div>
                  <div className='leading-loose'>{item.detail}</div>
                </Column>
              </div>
            ))}
          </>
        </Row>
      </Column>
    </div>
  )
}

export default GetYourLoan