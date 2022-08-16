/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-08-15 09:23:40
 * @LastEditTime: 2022-08-16 11:36:00
 */
import Button from '../Button';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Button', () => {
  test('mount @vue/test-utils', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });
    // 断言
    expect(wrapper.text()).toBe('Button');
  });
});

describe('color', () => {
  test('default', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });
    expect(
      wrapper
        .classes()
        .map(v => v.replace(/\r|\n/gi, ''))
        .includes('bg-blue-500'),
    ).toBe(true);
  });
  test('red', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        color: 'red',
      },
    });
    expect(
      wrapper
        .classes()
        .map(v => v.replace(/\r|\n/gi, ''))
        .includes('bg-red-500'),
    ).toBe(true);
  });
});
