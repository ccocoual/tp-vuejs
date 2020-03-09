import { shallowMount } from '@vue/test-utils';
import Card from '../Card.vue';

describe('Card.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Card);
    expect(wrapper).not.toBeNull();
  });
});
