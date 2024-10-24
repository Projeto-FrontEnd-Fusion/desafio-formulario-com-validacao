import React from 'react';

interface JobProps {
  jobs: string[];
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const JobSelect = React.forwardRef<HTMLSelectElement, JobProps>((props, ref) => {

  const sortedJobs = [...props.jobs].sort((a, b) => a.localeCompare(b));

  return (
    <div className='w-full '>
      <label htmlFor={props.id} className='block text-gray-700 text-sm font-semibold mb-2'>Cargo pretendido</label>
      <select
        className='w-full p-2 bg-transparent text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        id={props.id}
        ref={ref}
        onChange={props.onChange}
      >
        <option value="">Selecione o cargo pretendido</option>
        {sortedJobs.map((job, index) => (
          <option
            key={index}
            value={job.toLowerCase().replace(/ /g, '-')}
          >
            {job}
          </option>
        ))}
      </select>
    </div>
  );
});

export default JobSelect;
