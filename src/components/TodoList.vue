<template>
  <div class="todo-list">
    <div :class="['todo-item',{
      active: item.isActive
    }]" v-for="(item, index) in todos" :key="index">
      <input class="todo-item-checkbox" type="checkbox" v-model="item.isActive">
      <span class="todo-item-text"
        @click="handleToggle(index)">{{item.value}}</span>
      <button class="todo-item-delete"
        @click="handleDelete(index)">x</button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    todos: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    handleToggle (index) {
      this.$emit('toggle', index)
    },
    handleDelete (index) {
      this.$emit('delete', index)
    }
  }
}
</script>
