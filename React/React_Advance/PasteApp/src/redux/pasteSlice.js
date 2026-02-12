import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes: (() => {
      try {
        const data = localStorage.getItem("pastes");
        return data ? JSON.parse(data) : [];
      } catch (e) {
        localStorage.removeItem("pastes");
        return [];
      }
    })(),
  },
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      const exists = state.pastes.find((p) => p._id === paste._id);
      if (exists) {
        toast.error("Paste already exists!");
        return;
      }
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Successfully!");
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((p) => p._id == paste._id);
      if(index>=0)
        state.pastes[index] = paste;
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    resetAllPastes: (state, action) => {
      state.pastes = []
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      const pasteid = action.payload;
      const index = state.pastes.find((p) => p._id == pasteid);
      if(index > 0)
        state.pastes.splice(index, 1);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste deleted!")
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer