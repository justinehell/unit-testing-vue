import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', async () => {
    const wrapper = mount(LoginForm)
    // 1. Find text input
    const input = wrapper.find('input[type="text"]')

    // 2. Set value for text input
    input.setValue('Adam Jahr')

    // 3. Silumate form submission
    wrapper.trigger('submit')

    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // 5. Assert payload is correct
    const expectedPayload = { name: 'Adam Jahr' }
    // console.log(wrapper.emitted('formSubmitted')) --> [[{name: 'Adam Jahr' }]]
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
