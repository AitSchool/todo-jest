<template>
  <div id="app">
    <TodoHeader @add="addTodo"/>
    <TodoList :todos="todos"
      @toggle="toggleTodo"
      @delete="deleteTodo" />
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader'
import TodoList from '@/components/TodoList'

export default {
  name: 'app',
  components: {
    TodoHeader,
    TodoList
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (value) {
      this.todos.push({
        value,
        isActive: false
      })
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    toggleTodo (index) {
      this.todos[index].isActive = !this.todos[index].isActive
    }
  }
}
</script>

<style lang="less">
</style>
