import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome completo é obrigatório.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  phone: z.string().min(1, { message: 'Telefone é obrigatório.' }).regex(
    /^(\(\d{2}\)\s?\d{5}-\d{4}|\d{2}\s?\d{5}-\d{4}|\d{11})$/,
    { message: 'Telefone inválido. Use o formato (xx) xxxxx-xxxx, xx xxxxx-xxxx ou xxxxxxxxxxx.' }
  ),
  job: z.string().min(1, { message: 'Selecione um cargo.' }),
  linkedIn: z.string().optional(),
  github: z.string().optional(),
});
