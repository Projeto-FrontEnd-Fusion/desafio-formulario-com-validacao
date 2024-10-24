export const validationRules = {
  name: {
    required: { value: true, message: 'Preencha este campo.' },
  },
  email: {
    required: { value: true, message: 'Preencha este campo.' },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Digite um e-mail válido',
    },
  },
  phone: {
    required: { value: true, message: 'Preencha este campo.' },
    pattern: {
      value: /^(?:\(\d{2}\) \d{5}-\d{4}|\d{11})$/,
      message: 'Informe um número de telefone válido',
    },
  },
  job: {
    required: { value: true, message: 'Preencha este campo.' },
  },
};
