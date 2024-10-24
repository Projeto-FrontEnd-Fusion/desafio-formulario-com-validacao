export const ErrorMessage = ({ error }: { error?: string }) => {
  return error ? <small className='block text-red-400'>{error}</small> : null;
};
