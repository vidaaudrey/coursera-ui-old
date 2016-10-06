import { helloWorld } from '../../src/utils/common';
import { expect } from 'chai';
const { describe, it } = global;

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).to.equal('hello world!');
  });
});
