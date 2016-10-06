import { expect } from 'chai';

const helloWorld = () => {
  return 'hello world!';
};

describe('helloWorld', () => {
  it('should return hello world', () => {
    expect(helloWorld()).to.equal('hello world!');
  });
});
