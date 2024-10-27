import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
        id: 1,
        status: 'pending',
        title: 'Remove Button',
        description:
          'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
        date: '2023-08-28',
        assignedTo: 'Mir Hussain',
        priority: 'high',
      }
  ],
};
const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        state.tasks.push({
          id: state.tasks.length + 1,
          status: "pending",
          ...payload,
        });
      }
    },

    removeTask:  (state, { payload }) => {
        state.tasks = state.tasks.filter((task) => task.id !== payload);
    },

    updateStatus: (state,  { payload }) => {
        const target = state.tasks.find((item) => item.id === payload.id)
        target.status = payload.status
    }
  },
});
export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
