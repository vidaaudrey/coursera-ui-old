import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import {SvgIcon} from 'src';

const { describe, it, before } = global;

describe('SvgIcon', () => {
  let wrapper;
  const stub = sinon.stub();
  const children = <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>;
  const mockProp = {
    color: '#000',
    hoverColor: '#f1f1f1',
  };

  before(() => {
    wrapper = shallow(<SvgIcon>{children}</SvgIcon>);
  });

  // TODO[Audrey]: add more tests for hover, mouse
  describe('UI render', () => {
    it('renders children by default', () => {
      expect(wrapper.contains(children)).to.equal(true);
    });

    it('renders children with color', () => {
      wrapper = mount(<SvgIcon color={mockProp.color}>{children}</SvgIcon>);
      expect(wrapper.find('svg').props().style.fill).to.equal(mockProp.color);
    });
  });

  describe('bahavior', () => {
    it('renders with hoverColor when mouseEnter', () => {
      const onMouseEnter = sinon.spy();
      wrapper = mount(
        <SvgIcon
          color={mockProp.color}
          hoverColor={mockProp.hoverColor}
          onMouseEnter={onMouseEnter}
        >
          {children}
        </SvgIcon>
      );

      expect(wrapper.contains(children)).to.equal(true);
      wrapper.simulate('mouseEnter');
      expect(wrapper.find('svg').props().style.fill).to.equal(mockProp.hoverColor);
    });

    it('renders with color when mouseLeave', () => {
      const onMouseEnter = sinon.spy();
      wrapper = mount(
        <SvgIcon
          color={mockProp.color}
          hoverColor={mockProp.hoverColor}
          onMouseEnter={onMouseEnter}
        >
          {children}
        </SvgIcon>
      );

      wrapper.simulate('mouseEnter');
      wrapper.simulate('mouseLeave');
      expect(wrapper.find('svg').props().style.fill).to.equal(mockProp.color);
    });

    it('call onMouseEnter and onMouseLeave callback if passed in', () => {
      const onMouseEnter = sinon.spy();
      const onMouseLeave = sinon.spy();
      wrapper = mount(
        <SvgIcon
          color={mockProp.color}
          hoverColor={mockProp.hoverColor}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </SvgIcon>
      );

      wrapper.simulate('mouseEnter');
      expect(onMouseEnter.calledOnce).to.equal(true);
      wrapper.simulate('mouseLeave');
      expect(onMouseLeave.calledOnce).to.equal(true);
    });
  });

  describe('overwrites and extends', () => {
    it('overwrite style', () => {
      const fillColor = '#333';
      const width = 128;
      const styleOverwrite = {fill: fillColor, width};
      wrapper = mount(<SvgIcon color={mockProp.color} style={styleOverwrite}>{children}</SvgIcon>);
      expect(wrapper.find('svg').props().style.fill).to.equal(fillColor);
      expect(wrapper.find('svg').props().style.width).to.equal(width);
    });

    it('overwrites and extends htmlAttributes', () => {
      const htmlAttributes = {
        xmlns: 'http://www.w3.org/2000/svg',
        version: "1.1",
      }
      wrapper = mount(<SvgIcon color={mockProp.color} htmlAttributes={htmlAttributes}>{children}</SvgIcon>);
      expect(wrapper.find('svg').props().xmlns).to.equal(htmlAttributes.xmlns);
      expect(wrapper.find('svg').props().version).to.equal(htmlAttributes.version);
    });
  });

});
