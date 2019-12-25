<template>
  <div class="todo-header">
    <input class="todo-input" type="text"
      v-model="inputValue"
      @keyup.enter="handleAddTodo">
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleAddTodo () {
      if (!this.inputValue) {
        return
      }

      this.$emit('add', this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>
