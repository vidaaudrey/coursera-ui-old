import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import {App} from 'src';

const { describe, it, before } = global;

describe('App', () => {
  let wrapper;
  const stub = sinon.stub();
  const mockProp = {
    name: 'Audrey',
    handleClick: stub,
  };

  before(() => {
    wrapper = shallow(<App {...mockProp} />);
  });

  it('should show the given name', () => {
    expect(wrapper.text()).to.contain(mockProp.name);
  });

  it('should handle click', () => {
    wrapper.find('button').simulate('click');
    expect(stub.callCount).to.equal(1);
  });
});
