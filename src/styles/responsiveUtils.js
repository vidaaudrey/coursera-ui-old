/* eslint-disable no-param-reassign, no-bit-wise, no-extraneous-dependencies*/

const {breakPoints, containerWidth} = require('src/styles/devices');

export const w100 = {
  width: '100%',
};

export const h100 = {
  height: '100%',
};

export const container = {
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export const containerSm = {
  '@media (min-width: 544px)': {
    maxWidth: 576,
  },
};

export const containerMd = {
  '@media (min-width: 768px)': {
    maxWidth: 720,
  },
};

export const containerLg = {
  '@media (min-width: 992px)': {
    maxWidth: 940,
  },
};

export const containerXLg = {
  '@media (min-width: 1200px)': {
    maxWidth: 1140,
  },
};

export const small = {
    '@media (min-width: 1200px)': {
      maxWidth: 1140,
      backgroundColor: 'red',
    },
  };


export const containerAll = {
  container, containerSm, containerMd, containerLg, containerXLg, small
};



export const containerFluid = {
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export const row = {
  display: 'flex',
  marginLeft: 15,
  marginRight: -15,
};
