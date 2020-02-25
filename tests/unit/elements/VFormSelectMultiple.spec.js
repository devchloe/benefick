import { shallowMount } from '@vue/test-utils';
import VFormSelectMultiple from '@/elements/VFormSelectMultiple';

describe('VFormSelectMultiple.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(VFormSelectMultiple, {
      propsData: {
        options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
      },
    });
  });

  describe('renders', () => {
    it('when passed down options then should show as many options as received', () => {
      expect(wrapper.findAll('option').length).toBe(8);
    });

    it('when no passed down size then should show 5 options at a time', () => {
      expect(wrapper.find('select').attributes().size).toBe("5");
    });

    it('when passed down size then should show as many options as received via prop at a time', () => {
      wrapper = shallowMount(VFormSelectMultiple, {
        propsData: {
          options: [],
          size: 3,
        },
      });

      expect(wrapper.find('select').attributes().size).toBe('3');
    });
  });

  describe('props options', () => {
    it('options should be type Array', () => {
      expect(wrapper.vm.$options.props.options.type).toBe(Array);
    });

    it('options should be required', () => {
      expect(wrapper.vm.$options.props.options.required).toBeTruthy();
    });
  });

  describe('props size', () => {
    it('size should be type Number', () => {
      expect(wrapper.vm.$options.props.size.type).toBe(Number);
    });

    describe('validator', () => {
      it('when passed down value which is not number then return false', () => {
        expect(wrapper.vm.$options.props.size.validator('가')).toBe(false);
      });

      it('when passed down value which is float then should parse it to integer', () => {
        expect(wrapper.vm.$options.props.size.validator('1.1')).toBe(true);
      });
    });
  });
});
