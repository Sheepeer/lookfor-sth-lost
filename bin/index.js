#!/usr/bin/env node

const {findIt} = require('../src/index.js')

const [, , year, month, day] = process.argv
findIt(year, month, day)