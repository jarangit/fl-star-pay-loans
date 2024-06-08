import React from 'react'
import Row from '../elements/row'
import Image from 'next/image'
import Column from '../elements/column'
import { GiCheckMark } from 'react-icons/gi'

type Props = {}

const list = [
  'No credit check',
  '1 minute application form',
  'Get your money today',
  'Repay in 90 to 120 days',
  '$250 to $1500 instalment loans',
]

const Banner = (props: Props) => {
  return (
    <div className='bg-yellowLight pb-12'>
      <div className='my-container grid grid-cols-1 md:grid-cols-2 p-3'>
        {/* col1 */}
        <Column className='justify-center gap-6'>
          <div className='text-5xl'>Low On Funds? <span className='font-bold'> Fastest e-Transfer Loans</span> in Canada.</div>
          <Row className='flex-wrap gap-x-6'>
            {list.map((item, key) => (
              <Row className='gap-2 font-medium' key={key}>
                <GiCheckMark />
                <div>{item}</div>
              </Row>
            ))}
          </Row>
          <button className='bg-[#FFF887] py-3 px-10 rounded-full font-semibold w-fit'>Start My Application!</button>
          <div>18+, Full Time Eployment Required</div>
        </Column>
        {/* col2 */}
        <div>
          <div className='relative w-full  h-[600px]'>
            <Image
              src={'/images/banner-person.png'}
              alt=''
              fill
              style={{ objectFit: 'contain' }}

            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner