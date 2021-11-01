import { ref, computed } from 'vue';
import uuid from '../use/uuid';

export default function useTodos() {
  const state = {
    todoList: ref([]),
    todoActive: ref({}),
  };

  const actions = {
    setActiveTodo: (payload) => {
      mutations.SET_TODO_ACTIVE({ payload });
    },
    addTodoItem: (payload) => {
      payload.id = uuid();
      mutations.ADD_TODO({ payload });
    },
    deleteTodoItem: (id) => {
      mutations.DELETE_TODO({ id });
    },
    updateTodoText: (payload) => {
      mutations.UPDATE_TODO({ payload });
    },
    updateTodoDone: (id) => {
      let todoItem = state.todoList.value.find((todo) => todo.id === id);
      todoItem.done = !todoItem.done;
      mutations.UPDATE_TODO({ payload: todoItem });
    },
  };

  const mutations = {
    SET_ACTIVE_TODO: ({ payload }) => {
      state.todoActive.value = { ...payload };
    },
    ADD_TODO: ({ payload }) => {
      state.todoList.value.push({ ...payload });
    },
    DELETE_TODO: ({ id }) => {
      state.todoList.value = state.todoList.value.filter((todo) => {
        return todo.id !== id;
      });
    },
    UPDATE_TODO: ({ payload }) => {
      state.todoList.value.map((todo) => {
        if (todo.id === payload.id) {
          todo = { ...payload };
        }
      });
    },
  };

  const getters = {
    todoList: computed(() => state.todoList.value),

    todoActive: computed(() => state.todoActive.value),

    todoListSortedByDone: computed(() => {
      return state.todoList.value.sort((current, next) => {
        return current.done === next.done ? 0 : current.done ? 1 : -1;
      });
    }),
  };

  return { actions, getters };
}
