import {shallowMount} from "@vue/test-utils";
import TestUtilsCounter from "@/components/TestUtilsCounter.vue";

describe('Check simple counter', () => {
  const wrapper = shallowMount(TestUtilsCounter);
  const buttonAdd = wrapper.find('#add');
  const buttonSubtraction = wrapper.find('#subtraction');
  const counter = wrapper.find('#result');

  test('Check Add', async () => {
    expect(counter.text()).toContain('0');

    await buttonAdd.trigger('click');

    expect(counter.text()).toContain('1');
  });

  test('Check Add', async () => {
    expect(counter.text()).toContain('1');

    await buttonSubtraction.trigger('click');

    expect(counter.text()).toContain('0');
  });
})