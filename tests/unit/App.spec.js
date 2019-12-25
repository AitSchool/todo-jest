import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App 组件', () => {
  it('初始时，todos 为空', () => {
    const wrapper = shallowMount(App)
    const todos = wrapper.vm.$data.todos
    expect(todos).toEqual([])
  })

  it('addTodo 执行后，内容增加', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.addTodo('test')
    const todos = wrapper.vm.$data.todos
    expect(todos).toEqual([{ value: 'test', isActive: false}])
  })

  it('deleteTodo 执行删除对应的项目', () => {
    const wrapper = shallowMount(App)
    wrapper.setData({
      todos: [{ value: 'test', isActive: false}]
    })
    wrapper.vm.deleteTodo(0)
    const todos = wrapper.vm.$data.todos
    expect(todos).toEqual([])
  })

  it('toggleTodo 改变对应的项目的状态', () => {
    const wrapper = shallowMount(App)
    wrapper.setData({
      todos: [{ value: 'test', isActive: false}]
    })
    wrapper.vm.toggleTodo(0)
    const todos = wrapper.vm.$data.todos
    expect(todos).toEqual([{ value: 'test', isActive: true}])
  })
})
