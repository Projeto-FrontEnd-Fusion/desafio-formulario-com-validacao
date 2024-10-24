import { useForm } from 'react-hook-form';
import { IFormData } from '../types/IFormData';
import { validationRules } from '../utils/validationRules';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import { isEmailRegistered } from '../utils/isEmailRegistered';

export function useFormHandler() {
  const { handleSubmit, register, formState: { errors }, reset, setValue, setError } = useForm<IFormData>();

  const onSubmit = handleSubmit((data) => {
    if (isEmailRegistered(data.email)) {
      setError('email', {
        type: 'manual',
        message: 'Este e-mail já está cadastrado.'
      })
      return;
    }

    const existingData = getFromLocalStorage('formData');

    saveToLocalStorage('formData', [...existingData, data]);
    reset();
  });

  return {
    register,
    errors,
    onSubmit,
    setValue,
    validationRules,
  };
}
