import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from "../constants";
export const addReminder = (text, dueDate) => {
  return {
    type: ADD_REMINDER,
    text,
    dueDate
  };
};
export const deleteReminder = index => {
  return {
    type: DELETE_REMINDER,
    index
  };
};
export const clearReminder = () => {
  return {
    type: CLEAR_REMINDER
  };
};
