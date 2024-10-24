import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../utils/validationSchema';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import { isEmailRegistered } from '../utils/isEmailRegistered';
import { IFormData } from '../types/IFormData';

export function useFormHandler() {
  const { handleSubmit, register, formState: { errors }, reset, setValue, setError, clearErrors } = useForm<IFormData>({ resolver: zodResolver(formSchema) });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

    setSuccessMessage('E-mail cadastrado com sucesso!');
    reset();

    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  });

  return {
    register,
    errors,
    onSubmit,
    setValue,
    clearErrors,
    successMessage
  };
}
