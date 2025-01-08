// src/Redux/store.tsx
import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './Slices/memberSlice';
import { ReactNode } from 'react';

// Definindo o tipo Member
interface Member {
  telefone: ReactNode;
  id: string;
  nome: string;
  email: string;
  cargo: string;
  linkedin?: string;
  github?: string;
}

// Definindo a interface para o estado global
export interface RootState {
  member: {
    members: Member[];
  };
}

const store = configureStore({
  reducer: {
    member: memberReducer,
  },
});

export default store;
