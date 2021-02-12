var rowStyles = {
  row: {
    '--bs-gutter-x': '1.5rem',
    '--bs-gutter-y': 0,
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 'calc(var(--bs-gutter-y) * -1)',
    marginRight: 'calc(var(--bs-gutter-x) / -2)',
    marginLeft: 'calc(var(--bs-gutter-x) / -2)',
    '& > *': {
      '--bs-gutter-x': '1.5rem',
      '--bs-gutter-y': 0,
      boxSizing: 'border-box',
      flexShrink: 0,
      width: '100%',
      maxWidth: '100%',
      paddingRight: 'calc(var(--bs-gutter-x) / 2)',
      paddingLeft: 'calc(var(--bs-gutter-x) / 2)',
      marginTop: 'var(--bs-gutter-y)'
    }
  },
  row_cols_auto: {
    '& > *': {
      flex: '0 0 auto',
      width: 'auto'
    }
  },
  row_cols_1: {
    '& > *': {
      flex: '0 0 auto',
      width: '100%'
    }
  },
  row_cols_2: {
    '& > *': {
      flex: '0 0 auto',
      width: '50%'
    }
  },
  row_cols_3: {
    '& > *': {
      flex: '0 0 auto',
      width: '33.3333333333%'
    }
  },
  row_cols_4: {
    '& > *': {
      flex: '0 0 auto',
      width: '25%'
    }
  },
  row_cols_5: {
    '& > *': {
      flex: '0 0 auto',
      width: '20%'
    }
  },
  row_cols_6: {
    '& > *': {
      flex: '0 0 auto',
      width: '16.6666666667%'
    }
  },
  row_cols_sm_auto: {
    '& > *': {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    }
  },
  row_cols_sm_1: {
    '& > *': {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    }
  },
  row_cols_sm_2: {
    '& > *': {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    }
  },
  row_cols_sm_3: {
    '& > *': {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    }
  },
  row_cols_sm_4: {
    '& > *': {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    }
  },
  row_cols_sm_5: {
    '& > *': {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '20%'
      }
    }
  },
  row_cols_sm_6: {
    '& > *': {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    }
  },
  row_cols_md_auto: {
    '& > *': {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    }
  },
  row_cols_md_1: {
    '& > *': {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    }
  },
  row_cols_md_2: {
    '& > *': {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    }
  },
  row_cols_md_3: {
    '& > *': {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    }
  },
  row_cols_md_4: {
    '& > *': {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    }
  },
  row_cols_md_5: {
    '& > *': {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '20%'
      }
    }
  },
  row_cols_md_6: {
    '& > *': {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    }
  },
  row_cols_lg_auto: {
    '& > *': {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    }
  },
  row_cols_lg_1: {
    '& > *': {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    }
  },
  row_cols_lg_2: {
    '& > *': {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    }
  },
  row_cols_lg_3: {
    '& > *': {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    }
  },
  row_cols_lg_4: {
    '& > *': {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    }
  },
  row_cols_lg_5: {
    '& > *': {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '20%'
      }
    }
  },
  row_cols_lg_6: {
    '& > *': {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    }
  },
  row_cols_xl_auto: {
    '& > *': {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    }
  },
  row_cols_xl_1: {
    '& > *': {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    }
  },
  row_cols_xl_2: {
    '& > *': {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    }
  },
  row_cols_xl_3: {
    '& > *': {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    }
  },
  row_cols_xl_4: {
    '& > *': {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    }
  },
  row_cols_xl_5: {
    '& > *': {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '20%'
      }
    }
  },
  row_cols_xl_6: {
    '& > *': {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    }
  },
  row_cols_xxl_auto: {
    '& > *': {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    }
  },
  row_cols_xxl_1: {
    '& > *': {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    }
  },
  row_cols_xxl_2: {
    '& > *': {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    }
  },
  row_cols_xxl_3: {
    '& > *': {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    }
  },
  row_cols_xxl_4: {
    '& > *': {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    }
  },
  row_cols_xxl_5: {
    '& > *': {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '20%'
      }
    }
  },
  row_cols_xxl_6: {
    '& > *': {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    }
  }
};
export { rowStyles };