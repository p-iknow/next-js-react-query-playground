/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  reactStrictMode: true,
};
const { withSentryConfig } = require('@sentry/nextjs');
const Module = require('module');
const path = require('path');
const resolveFrom = require('resolve-from');

const node_modules = path.resolve(__dirname, 'node_modules');

const originalRequire = Module.prototype.require;

// The following ensures that there is always only a single (and same)
// copy of React in an app at any given moment.
Module.prototype.require = function (modulePath) {
  // Only redirect resolutions to non-relative and non-absolute modules
  if (
    ['/react/', '/react-dom/', '/react-query/'].some(d => {
      try {
        return require.resolve(modulePath).includes(d);
      } catch (err) {
        return false;
      }
    })
  ) {
    try {
      modulePath = resolveFrom(node_modules, modulePath);
    } catch (err) {
      //
    }
  }

  return originalRequire.call(this, modulePath);
};

/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react$: resolveFrom(path.resolve('node_modules'), 'react'),
        'react-query$': resolveFrom(path.resolve('node_modules'), 'react-query'),
        'react-dom$': resolveFrom(path.resolve('node_modules'), 'react-dom'),
      },
    };
    return config;
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(NextConfig, sentryWebpackPluginOptions);
