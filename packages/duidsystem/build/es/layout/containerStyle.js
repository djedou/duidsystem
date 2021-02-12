import _extends from "@babel/runtime/helpers/esm/extends";
const containerClasses = ["fluid", "xxl", "xl", "lg", "md", "sm"];
const defaultstyle = {
  width: '100%',
  paddingRight: '0.75rem',
  paddingLeft: '0.75rem',
  marginRight: 'auto',
  marginLeft: 'auto'
};
const containerStyles = {
  sm: _extends({}, defaultstyle, {
    '@media (min-width: 576px)': {
      maxWidth: '540px'
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px'
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    },
    '@media (min-width: 1400px)': {
      maxWidth: '1320px'
    }
  }),
  md: _extends({}, defaultstyle, {
    '@media (min-width: 768px)': {
      maxWidth: '720px'
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    },
    '@media (min-width: 1400px)': {
      maxWidth: '1320px'
    }
  }),
  lg: _extends({}, defaultstyle, {
    '@media (min-width: 992px)': {
      maxWidth: '960px'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    },
    '@media (min-width: 1400px)': {
      maxWidth: '1320px'
    }
  }),
  xl: _extends({}, defaultstyle, {
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    },
    '@media (min-width: 1400px)': {
      maxWidth: '1320px'
    }
  }),
  xxl: _extends({}, defaultstyle, {
    '@media (min-width: 1400px)': {
      maxWidth: '1320px'
    }
  }),
  fluid: _extends({}, defaultstyle)
};
export { containerStyles, containerClasses };