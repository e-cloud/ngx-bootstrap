#!/usr/bin/env bash

yarn build --prod -c production
yarn build:docs --prod
node ./tools/copy-package-info-and-assets.js
currentBranch=`git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'`
git checkout gh-pages
yes | cp -rf dist/docs/* docs
git add -A
git commit -m "docs update"
git checkout $currentBranch
