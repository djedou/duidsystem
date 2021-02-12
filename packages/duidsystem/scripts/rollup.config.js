import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from '@rollup/plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import nodePolyfills from 'rollup-plugin-node-polyfills';


const input = './src/index.js';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  'react-is': ['isForwardRef'],
  '@material-ui/styles': '@material-ui/styles'
};

const babelOptions = {
  exclude: /node_modules/,
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
  //babelHelpers: 'runtime',
  configFile: '../../babel.config.js',
};

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/
};

function onwarn(warning) {
  if (
    warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
    warning.source === 'react' &&
    warning.names.filter((identifier) => identifier !== 'useDebugValue').length === 0
  ) {
    console.warn(warning.message);
  } else {
    throw Error(warning.message);
  }
}


export default [
  {
    input,
    onwarn,
    output: {
      file: 'build/umd/duidsystem.development.js',
      format: 'umd',
      name: 'duidsystem',
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodePolyfills(),
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  {
    input,
    onwarn,
    output: {
      file: 'build/umd/duidsystem.production.min.js',
      format: 'umd',
      name: 'duidsystem',
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodePolyfills(),
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot({ snapshotPath: 'size-snapshot.json' }),
      terser(),
    ],
  },
];
