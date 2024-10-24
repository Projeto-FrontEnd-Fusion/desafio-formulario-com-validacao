import { useFormHandler } from '../../hooks/useFormHandler';
import { JOBS } from '../../data/jobs';
import { Button } from '../Button';
import Input from '../Input';
import JobSelect from '../JobSelect';
import { ErrorMessage } from '../ErrorMessage';

export function Form() {
  const { register, errors, onSubmit, setValue, clearErrors, successMessage } = useFormHandler();

  return (
    <form onSubmit={onSubmit} className='bg-white shadow-md rounded-lg p-8 max-w-lg w-full'>
      <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Front-End Fusion</h1>

      {
        successMessage && (
          <div className='bg-green-100 text-green-700 p-4 mb-4 rounded'>
            {successMessage}
          </div>
        )
      }

      <div className="mb-4">
        <Input
          id='name'
          label='Nome completo'
          type="text"
          placeholder='Nome completo'
          {...register('name')}
        />
        <ErrorMessage error={errors.name?.message} />
      </div>



      <div className="mb-4">
        <Input
          id='email'
          label='E-mail'
          type="email"
          placeholder='E-mail'
          {...register('email')}
        />
        <ErrorMessage error={errors.email?.message} />
      </div>

      <div className="mb-4">
        <Input
          id='phone'
          label='Telefone'
          placeholder='(XX) XXXXX-XXXX'
          type='tel'
          {...register('phone')}
        />
        <ErrorMessage error={errors.phone?.message} />
      </div>

      <div className="mb-4">
        <Input
          id='linkedin'
          label='LinkedIn'
          placeholder='LinkedIn'
          type='text'
          {...register('linkedIn')}
        />
      </div>

      <div className="mb-4">
        <Input
          id='github'
          label='GitHub'
          placeholder='GitHub'
          type='text'
          {...register('github')}
        />
      </div>

      <div className="mb-4">
        <JobSelect
          id='job'
          jobs={JOBS}
          {...register('job')}
          onChange={(e) => {
            setValue('job', e.target.value);
            clearErrors('job');
          }}
        />
        <ErrorMessage error={errors.job?.message} />
      </div>
      <Button text='Enviar' />
    </form>
  );
}
