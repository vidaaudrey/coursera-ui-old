import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

const App = ({ name = 'world!', handleClick }) => {
  return (
    <div className="rc-App">
      <h1>Hello {name}!</h1>
      <button onClick={() => {handleClick(name);}}> Ask {name}</button>
    </div>
  );
};

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
})
