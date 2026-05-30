// vue.config.js
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = {
  configureWebpack: config => {
    config.plugins.push(
      new PrerenderSPAPlugin({
        // Required
        staticDir: path.join(__dirname, 'dist'),
        // Required
        routes: ['/home', '/ecology', '/about', '/team', '/gtb'],
        renderer: new Renderer({
          renderAfterDocumentEvent: 'prerender',
        })
      })
    )
  }
};