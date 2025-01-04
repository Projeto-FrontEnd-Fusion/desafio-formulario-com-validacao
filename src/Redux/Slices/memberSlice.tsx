import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Member {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  linkedin?: string;
  github?: string;
}

interface MemberState {
  members: Member[];
}

const initialState: MemberState = {
  members: [],
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    addMember(state, action: PayloadAction<Member>) {
      state.members.push(action.payload); // Adiciona o membro ao estado
    },
    setMembers(state, action: PayloadAction<Member[]>) {
      state.members = action.payload; // Atualiza todos os membros
    },
  },
});

export const { addMember, setMembers } = memberSlice.actions; // Exporta as ações
export default memberSlice.reducer;
