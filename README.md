## MTR

`npx make-types-rest`

```sh
 Usage
    $ mtr --url <urlString>
    $ mtr --url <urlString> --copy
    $ mtr --url <urlString> --root post

  Options
    --url, -u   Url to be converted to Types
    --root, -r  Name of Interface default "RootObject"
    --copy, -c  Copy output to clipboard

  Examples
    $ mtr -u https://jsonplaceholder.typicode.com/posts  --root post

     interface Post {
       userId: number;
       id: number;
       title: string;
       body: string;
     }
```

## Usage

### Install

`npm i -g make-types-rest`

### Run in command line

`make-types-rest -u https://jsonplaceholder.typicode.com/posts --root post`

or

`mtr -u https://jsonplaceholder.typicode.com/posts -r post -c`

### Output

```typescript
interface Post {
  userId: number
  id: number
  title: string
  body: string
}
```

## Creds

json-to-ts - https://www.npmjs.com/package/json-to-ts
