# Durat

Created with ❤️ by [@FilippoFonseca](https://www.twitter.com/FilippoFonseca)

![Logo](https://i.ibb.co/L6PttGB/d.png)

## What is this?

Durat is a functional JS/TS open-source Node framework for opening the possibilities of what you can do with text.

Part of an experiment in the fields of universal grammar, language connotation, and linguistics.

## Initialization

**Install Durat:**

```ts
npm i durat
// or
yarn add durat
```

**Initialize it in your project:**

```ts
import Durat from "durat";

// declare an instance of the class Durat and assign it to a variable, as such:

const durat = new Durat();

// now you can use Durat's functionality in your code, as such:

const timeToRead = (input: string) => {
  const result = Durat.readTime(input);

  return result;
};
```

Let's test the output of our `timeToRead` function, which we initialized above:

```ts
console.log(
  timeToRead("This is an example of text you would pass in to this method.")
);
```

**Output in console**: 6

## Use

Read more of the official Durat documentation to understand more about how it works/how to use it by clicking [here]().
