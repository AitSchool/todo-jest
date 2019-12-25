import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList 组件', () => {
  it('初始化时候数据为[{ value:1, isActive: false}] 列表有复选框、文字、删除按钮', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { todos: [{ value:1, isActive: true}] }
    })
    const input = wrapper.find('.todo-item-checkbox')
    const text = wrapper.find('.todo-item-text')
    const button = wrapper.find('.todo-item-delete')
    expect(input.exists()).toBeTruthy()
    expect(text.exists()).toBeTruthy()
    expect(button.exists()).toBeTruthy()
  })

  it('初始化时候数据为[{ value:1, isActive: true}] 列表展示点击状态', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { todos: [{ value: 'test', isActive: true}] }
    })
    const input = wrapper.find('.todo-item-checkbox')
    const value = wrapper.find('.todo-item-text')
    expect(input.element.checked).toBeTruthy()
    expect(value.text()).toBe('test')
  })

  it('初始化数据为第二项 isActive 为真时候，todo-item 拥有 active 的 class 名', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: {
        todos: [
          { value: 'test', isActive: false},
          { value: 'test2', isActive: true}]
      }
    })
    const todoItem = wrapper.findAll('.todo-item').at(1)
    expect(todoItem.classes()).toContain('active')
  })

  it('点击第二项文字、删除按钮，给父组件发送信息', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: {
        todos: [
          { value: 'test', isActive: false},
          { value: 'test2', isActive: true}]
      }
    })
    const todoItemText = wrapper.findAll('.todo-item-text').at(1)
    const todoItemDelete = wrapper.findAll('.todo-item-delete').at(1)
    todoItemText.trigger('click')
    todoItemDelete.trigger('click')
    expect(wrapper.emitted().toggle).toBeTruthy()
    expect(wrapper.emitted().delete).toBeTruthy()
  })
})
