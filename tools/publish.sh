#!/usr/bin/env bash

yarn build --prod -c production
npm publish --access=public ./dist/ngx-bootstrap --registry=https://registry.npmjs.org/
