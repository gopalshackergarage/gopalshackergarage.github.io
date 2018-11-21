/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-5baad247f5cea7d0cbde.js"
  },
  {
    "url": "app.319712d3e7fffa8163a7.css"
  },
  {
    "url": "app-612abc35b313ebc72bb7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-84dab8a3c563469a0e34.js"
  },
  {
    "url": "index.html",
    "revision": "d5cf14ae85d44ee76ce950fa07fafc0c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2c904252a85e2958db7c1fd560ed9892"
  },
  {
    "url": "1.f78b2319e8555be3e862.css"
  },
  {
    "url": "0.bddaef654c66ded1434d.css"
  },
  {
    "url": "0-bc7e3d86932a102cd36d.js"
  },
  {
    "url": "1-58a5908937f10f0495d3.js"
  },
  {
    "url": "component---src-pages-index-js-a419f5effa11d5ce088f.js"
  },
  {
    "url": "static/d/264/path---index-6a9-XUAlZ4gm93AuRQseefduLmG6dsc.json",
    "revision": "ffc23f6e268939a9d06fd69f66cb1704"
  },
  {
    "url": "component---src-pages-404-js-87b38b862535a0086bdf.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "23ccfece91dd4c02bb91b9b9aec70dfa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});