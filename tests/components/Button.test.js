import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import {Button} from 'src';

const { describe, it, before } = global;

describe('Button', () => {
  let wrapper;
  const stub = sinon.stub();
  const mockProp = {
    children: 'Hello',
    onClick: stub,
  };

  before(() => {
    wrapper = shallow(<Button {...mockProp} />);
  });

  it('should show the given name', () => {
    expect(wrapper.text()).to.contain(mockProp.children);
  });
});
