#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:gh

# deploy
npx angular-cli-ghpages --dir=dist/fake-legacy-angular-app/
