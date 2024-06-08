import Image from 'next/image'
import React from 'react'
import Column from './elements/column'
import Row from './elements/row'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <div className='my-container grid grid-cols-1 md:grid-cols-2 !py-12 items-center border-b border-gray gap-6'>
        <Column className='gap-24'>
          <Image
            src={'/images/logo.png'}
            alt=''
            width={150}
            height={150}
          />
          <button className='font-semibold p-3 px-6 rounded-lg bg-[#FFF887] w-fit'>Start Your Application</button>
        </Column>

        {/* section-2 */}
        <Row className='justify-between !items-start'>
          <Column>
            <div className='font-bold text-xl'>Contract</div>
            <div>info@starpayloans.ca</div>
          </Column>
          <Column>
            <div className='font-bold text-xl'>Office
            </div>
            <div>Monday - Friday</div>
            <div>9AM - 5PM Eastern</div>
          </Column>

          {/* section-3 */}
          <Image
            src={'/images/women-with-coin.png'}
            alt=''
            width={150}
            height={150}
          />
        </Row>
      </div>

      {/* copy */}
      <div className='py-6 text-center'>© 2024 Copyright <span className='font-bold'>Starpayloans</span></div>
    </div>
  )
}

export default Footer