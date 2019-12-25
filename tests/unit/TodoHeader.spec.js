import { shallowMount } from '@vue/test-utils'
import TodoHeader from '@/components/TodoHeader.vue'

describe('TodoHeader 组件', () => {
  it('input 框值发生变化，数据应该跟着变', () => {
    const wrapper = shallowMount(TodoHeader)
    const input = wrapper.find('.todo-input')
    input.setValue('haha')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('haha')
  })

  it('input 框输入回车，无内容时，无反应', () => {
    const wrapper = shallowMount(TodoHeader)
    const input = wrapper.find('.todo-input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('input 框输入回车，有内容时，向外触发事件, 同时清空输入框的值', () => {
    const wrapper = shallowMount(TodoHeader)
    const input = wrapper.find('.todo-input')
    input.setValue('haha')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
})
