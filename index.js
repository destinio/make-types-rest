#!/usr/bin/env node

import jsonToTs from 'json-to-ts'
import fetch from 'node-fetch'

async function getJson(rootName) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return data[0]
}

/**
 *
 * @param {string} rootName - Root type name
 * @example getTypes('Posts')
 */
async function getTypes(rootName) {
  const convertedTypes = jsonToTs()
}

;(() => {
  console.log('More soom 🚀')
})()
