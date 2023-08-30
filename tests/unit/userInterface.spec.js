import { mount } from "@vue/test-utils";
import TestUtilsUserInterface from '@/components/TestUtilsUserIntrface.vue'
import TestUtilsCounter from "@/components/TestUtilsCounter.vue";

describe('userInterface', () => {
  const wrapper = mount(TestUtilsUserInterface);

  test('Add emit', async () => {
    await wrapper.findComponent(TestUtilsCounter)
      .find('#add')
      .trigger('click');

    expect(wrapper.html()).toContain('Value: 1');
  })
})
