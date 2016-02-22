#!/bin/sh

[ ! -f node_modules/.bin/gulp ] && echo "Building npm modules:" && npm rebuild

node_modules/.bin/gulp $*
