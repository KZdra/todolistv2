import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

interface Todo {
  title: string;
  done: boolean;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    name: '',
    todos: [] as Todo[],
    newTodo: '',
  }),
  actions: {
    addTodo() {
         // Memeriksa apakah input hanya berisi spasi atau tidak ada teks
  if (this.newTodo.trim() === '') {
    Swal.fire({
      title: "Empty Todo",
      text: "Todo cannot be empty!",
      icon: "error",
      confirmButtonText: "OK"
    });
    return; // Menghentikan eksekusi lebih lanjut jika input kosong
  }

  // Memeriksa apakah todo sudah ada di dalam daftar
  let duplicate = this.todos.find(todo => todo.title === this.newTodo.trim());

  if (duplicate) {
    if (duplicate.done) {
      this.todos.push({ title: this.newTodo.trim(), done: false });
      this.newTodo = ''; // Mengosongkan input setelah ditambahkan
    } else {   
      Swal.fire({
        title: "Duplicate Todo",
        text: "This todo already exists and is marked as done!",
        icon: "warning",
        confirmButtonText: "OK"
      });
    }
  } else {
    // Jika tidak ada duplikat, tambahkan todo baru ke dalam array todos
    this.todos.push({ title: this.newTodo.trim(), done: false });
    this.newTodo = ''; // Mengosongkan input setelah ditambahkan
  }
    },
    deleteAllTodos() {
      this.todos = [];
    },

    deleteAllDoneTodos() {
        const doneIndexes = this.todos
          .map((todo, index) => ({ todo, index }))
          .filter(({ todo }) => todo.done)
          .map(({ index }) => index);
  
        for (let i = doneIndexes.length - 1; i >= 0; i--) {
          this.todos.splice(doneIndexes[i], 1);
        }
    },  
    markDone(index: number) {
      this.todos[index].done = !this.todos[index].done;
    },
    deleteTodo(index: number) {
      this.todos.splice(index, 1);
    },
  },
  persist: true, // enable persist
});
