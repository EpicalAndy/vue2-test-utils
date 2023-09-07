import { mount } from "@vue/test-utils";
import TestUtilsCounter from "@/components/TestUtilsCounter.vue";

describe('Check counter', () => {
  const wrapper = mount(TestUtilsCounter);
  const buttonAdd = wrapper.find('#add');
  const buttonSubtraction = wrapper.find('#subtraction');

  test('Check Add', async () => {
    /*expect(wrapper.vm.$data.localValue).toBe(0);

    await buttonAdd.trigger('click');

    expect(wrapper.vm.$data.localValue).toBe(1);*/
  });

  test('Check Subtraction', async () => {
    /*expect(wrapper.vm.$data.localValue).toBe(1);

    await buttonSubtraction.trigger('click');

    expect(wrapper.vm.$data.localValue).toBe(0);*/
  });
})
