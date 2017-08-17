# Puppeteer example

[![Build Status](https://travis-ci.org/Quramy/puppeteer-example.svg?branch=master)](https://travis-ci.org/Quramy/puppeteer-example)
[![wercker status](https://app.wercker.com/status/b008857b425f34753438e34739bba315/s/master "wercker status")](https://app.wercker.com/project/byKey/b008857b425f34753438e34739bba315)

Demonstration repository explains how to run [Puppeteer](https://github.com/GoogleChrome/puppeteer) using CI services.

## with TravisCI
It's so easy.

```yml
# .travis.yml

os:
- linux
language: node_js
node_js:
- '8'
```

## with Docker based CI Services
If you want to run Puppeteer on Docker based CI services(e.g. CircleCI 2.x or Wercker CI), it needs a little trick.

The [official node image](https://hub.docker.com/_/node/) built on Debian OS lacks some dependencies, so you should install them manually.

```sh
#!/bin/bash

apt-get update
apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
  libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
  libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
  libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
  ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

And when instantiating Puppeteer you should set chromium CLI options via:

```js
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
```

If you want more details, check https://github.com/GoogleChrome/puppeteer/issues/290 .
