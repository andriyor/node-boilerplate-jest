import {expect, it} from '@jest/globals';

import { sum } from '../src/main'

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
