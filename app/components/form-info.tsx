"use client"; // This is a client component 

import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoanForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()
  const onSubmit = (data: any) => {
    console.log(data);
    if (data) {
      router.push(`/form-loan?${new URLSearchParams(data)}`);
    }
  };

  return (
    <div className='bg-main p-7'>
      <form onSubmit={handleSubmit(onSubmit)} className={`grid grid-cols-3 gap-6 my-container !py-12 bg-white rounded-2xl shadow-xl`}>
        <div className='text-5xl col-span-3'>From</div>
        <div className='flex  flex-col'>
          <label htmlFor="email">Email</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="email"
            id="email"
            {...register('email', { required: true })}
            defaultValue="schamberger.ophelia@hotmail.com"
          />
          {errors.email && <p className={`text-red-600`}>Email is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="requested_amount">Requested Amount</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="number"
            id="requested_amount"
            {...register('requested_amount', { required: true })}
            defaultValue="2000"
          />
          {errors.requested_amount && <p className={`text-red-600`}>Requested Amount is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="first_name">First Name</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="first_name"
            {...register('first_name', { required: true })}
            defaultValue="Joanne "
          />
          {errors.first_name && <p className={`text-red-600`}>First Name is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="last_name">Last Name</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="last_name"
            {...register('last_name', { required: true })}
            defaultValue="Hermann"
          />
          {errors.last_name && <p className={`text-red-600`}>Last Name is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="last4ssn">Last 4 of SSN</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="last4ssn"
            {...register('last4ssn', { required: true })}
            defaultValue="6822"
          />
          {errors.last4ssn && <p className={`text-red-600`}>Last 4 of SSN is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="zip">Zip</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="zip"
            {...register('zip', { required: true })}
            defaultValue="80203"
          />
          {errors.zip && <p className={`text-red-600`}>Zip is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="address">Address</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="address"
            {...register('address', { required: true })}
            defaultValue="345 Herman Lodge Suite 296"
          />
          {errors.address && <p className={`text-red-600`}>Address is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="ssn">SSN</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="ssn"
            {...register('ssn', { required: true })}
            defaultValue="182746822"
          />
          {errors.ssn && <p className={`text-red-600`}>SSN is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="field_best_time_to_call">Best Time to Call</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="field_best_time_to_call"
            {...register('field_best_time_to_call', { required: true })}
            defaultValue="ANYTIME"
          />
          {errors.field_best_time_to_call && <p className={`text-red-600`}>Best Time to Call is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="home_phone">Home Phone</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="tel"
            id="home_phone"
            {...register('home_phone', { required: true })}
            defaultValue="4579509880"
          />
          {errors.home_phone && <p className={`text-red-600`}>Home Phone is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="job_title">Job Title</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="job_title"
            {...register('job_title', { required: true })}
            defaultValue="Hoppe Inc Ltd"
          />
          {errors.job_title && <p className={`text-red-600`}>Job Title is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="bank_aba">Bank ABA</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="bank_aba"
            {...register('bank_aba', { required: true })}
            defaultValue="211372378"
          />
          {errors.bank_aba && <p className={`text-red-600`}>Bank ABA is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="work_phone">Work Phone</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="tel"
            id="work_phone"
            {...register('work_phone', { required: true })}
            defaultValue="5695292885"
          />
          {errors.work_phone && <p className={`text-red-600`}>Work Phone is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="employed_months">Employed Months</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="number"
            id="employed_months"
            {...register('employed_months', { required: true })}
            defaultValue="60"
          />
          {errors.employed_months && <p className={`text-red-600`}>Employed Months is required.</p>}
        </div>

        <div className='flex  flex-col'>
          <label htmlFor="bank_account_number">Bank Account Number</label>
          <input
            className={`border px-3 py-2 rounded-lg`}
            type="text"
            id="bank_account_number"
            {...register('bank_account_number', { required: true })}
            defaultValue=""
          />
          {errors.bank_account_number && <p className={`text-red-600`}>Bank Account Number is required.</p>}
        </div>

        <button type='submit' className='text-white font-bold bg-text p-2 rounded-full px-6'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
