import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Todo 集成测试', () => {
  it(`
    1. 用户在 TodoHeader 中输入确认后，App 父组件的 data 是否多了一条意向数据，以及 TodoList 组件是否新增一条数据。
    2. 当点击 TodoList 组件中的文字时候，App 父组件的 data 对应的下标数据状态是否发生变化。
    3. 当点击 TodoList 组件的删除按钮时候，App 父组件 data 对应的下标数据是否会删除。
  `, () => {
    const wrapper = mount(App)
    const todoInput = wrapper.find('.todo-input')
    todoInput.setValue('Hello World')
    todoInput.trigger('keyup.enter')
    const todos = wrapper.vm.$data.todos
    expect(todos).toEqual([{ value: 'Hello World', isActive: false}])
    const TodoItem = wrapper.findAll('.todo-item')
    expect(TodoItem.length).toBe(1)
    const todoItemText = wrapper.findAll('.todo-item-text').at(0)
    const todoItemCheckbox = wrapper.findAll('.todo-item-checkbox').at(0)
    const todoItemDelete = wrapper.findAll('.todo-item-delete').at(0)
    todoItemText.trigger('click')
    expect(todos).toEqual([{ value: 'Hello World', isActive: true}])
    todoItemDelete.trigger('click')
    expect(todos).toEqual([])
  })
})

describe('App 页面用户行为', () => {
  it(`
    1. 用户在输入框中输入内容，按下输入框，列表中多了一条和输入相同文字的数据
    2. 新生成数据对应的复选框默认没有被选择
    3. 按一下对应的文字，对应的数据的复选框被选择了
    4. 按一下对应的删除按钮，整条数据都消失了
  `, () => {
    const wrapper = mount(App)
    const inputElem = wrapper.find('.todo-input')
    inputElem.setValue('Hello World')
    inputElem.trigger('keyup.enter')
    const todoItemText = wrapper.findAll('.todo-item-text').at(0)
    const todoItemCheckbox = wrapper.findAll('.todo-item-checkbox').at(0)
    const todoItemDelete = wrapper.findAll('.todo-item-delete').at(0)
    expect(todoItemText.text()).toContain('Hello World')
    expect(todoItemCheckbox.element.checked).toBeFalsy()
    todoItemText.trigger('click')
    expect(todoItemCheckbox.element.checked).toBeTruthy()
    todoItemDelete.trigger('click')
    const todoItem = wrapper.findAll('.todo-item')
    expect(todoItem.length).toBe(0)
  })
})
