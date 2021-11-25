#!/usr/bin/env node

import jsonToTs from 'json-to-ts'
import fetch from 'node-fetch'
import meow from 'meow'
import clipboard from 'clipboardy'
import chalk from 'chalk'
import cfonts from 'cfonts'
;(async () => {
  const app = meow(
    `
	Usage
	  $ mtr --url <urlString>
	  $ mtr --url <urlString> --copy
	  $ mtr --url <urlString> --root post

	Options
	  --url, -u  Url to be converted to Types
    --root, -r Name of Interface default "RootObject"
	  --copy, -c Copy output to clipboard

	Examples
	  $ mtr -u https://jsonplaceholder.typicode.com/posts  --root post

    interface Test {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

`,
    {
      importMeta: import.meta,
      flags: {
        url: {
          type: 'string',
          alias: 'u',
          isRequired: true,
        },
        copy: {
          type: 'boolean',
          alias: 'c',
        },
        root: {
          type: 'string',
          alias: 'r',
        },
      },
    }
  )

  const { url, copy, root } = app.flags

  if (!url) {
    console.log(app.help)
    return
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()
  const data = await json[0]

  const types = !root
    ? jsonToTs(data)[0]
    : jsonToTs(data, {
        rootName: root,
      })[0]

  console.log(chalk.bold.yellowBright('\nHere are the types you requested:\n'))
  console.log(chalk.cyanBright(types))

  if (copy) {
    clipboard.writeSync(types)
    console.log(chalk.greenBright.bold('\nCopied to you clipbaord 🚀\n'))
  }
})()
