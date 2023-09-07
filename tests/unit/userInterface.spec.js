import { mount } from "@vue/test-utils";
import TestUtilsUserInterface from '@/components/TestUtilsUserIntrface.vue'
import TestUtilsCounter from "@/components/TestUtilsCounter.vue";

describe('userInterface', () => {
  const wrapper = mount(TestUtilsUserInterface, {data() {return {value: 10}}});
  const counterComponent = wrapper.findComponent(TestUtilsCounter);

  test('Add', async () => {
    expect(wrapper.vm.$data.value).toBe(10);
    await counterComponent
      .find('#add')
      .trigger('click');
    await counterComponent
      .find('#add')
      .trigger('click');

    expect(wrapper.vm.$data.value).toBe(12);
  })

  test('subtraction', async () => {
    expect(wrapper.vm.$data.value).toBe(12);
    await counterComponent
      .find('#subtraction')
      .trigger('click');
    await counterComponent
      .find('#subtraction')
      .trigger('click');
    await counterComponent
      .find('#subtraction')
      .trigger('click');

    expect(wrapper.vm.$data.value).toBe(9);
  })
})
