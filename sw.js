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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

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
    "url": "webpack-runtime-214e58b781b9d320506b.js"
  },
  {
    "url": "app-07dca2815d7c7ee4a785.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c1c28596954230245eef.js"
  },
  {
    "url": "index.html",
    "revision": "1be8323fed5ac39468d5358cb7b279e1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "77ec9f0ad618c88e6a9037373abbdfa9"
  },
  {
    "url": "0.7237426994d39e129a83.css"
  },
  {
    "url": "1.e587148502f8b100b52f.css"
  },
  {
    "url": "1-d8a91b536914e67d3b97.js"
  },
  {
    "url": "component---src-pages-index-js-a1140465b533d3499ddd.js"
  },
  {
    "url": "0-7af3ce769a912092659e.js"
  },
  {
    "url": "static/d/703/path---index-6a9-2Cq3o4y8HNj0i1rIeqcoMp7XOLc.json",
    "revision": "de001736cbeba4fb40195d9bb6c6cc1c"
  },
  {
    "url": "component---src-pages-404-js-4fd053247f44e7a0a7ce.js"
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