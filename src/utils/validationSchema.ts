import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome completo é obrigatório.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  phone: z.string().min(1, { message: 'Telefone é obrigatório.' }),
  job: z.string().min(1, { message: 'Selecione um cargo.' }),
  linkedIn: z.string().optional(),
  github: z.string().optional(),
});
