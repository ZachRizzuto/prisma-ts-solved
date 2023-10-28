# Query Practice!

Today we're going to practice writing some Prisma Queries. If you look at `prisma/schema.prisma` you can see that we've set up a database schema for you that relates users to movies with ratings.

This means we should be able to look for things like:

- What movies has the user with the name "jon higger" rated ?
- What users have rated the movie with the title "forrest gump" ?
- What is the average rating of the movie titled "forrest gump" ?

### Why the F are we using typescript?

Don't freak out but we're about to level you up. While Javascript is great, we can get some really cool benefits from using Typescript, **especially on large projects**. Don't worry that's a different lesson for a different day, but you will technically be writing some typescript RIGHT TF NOW!

One of the cool parts about typescript is that it is a superset of javascript, in the same way a rectangle is a superset of a square! That means that in most circumstances typescript code looks exactly the same as javascript code, and if it ever does look different it only is in the **type annotations**.

Let's look at the following javascript code which takes a first name and a last name and builds a full name.

```js
const firstName = "Naruto";
const lastName = "Uzumaki";
const fullName = `${firstName} ${lastName}`;
```

Let's now look at the same code but in typescript

```ts
const firstName = "Naruto"; // typescript can infer that `firstName` is a string
const lastName = "Uzumaki"; // typescript can infer that `lastName` is a string
const fullName = `${firstName} ${lastName}`; // typescript can infer that `fullName` is a string
```

Wait what?!?! It's the same exact code. Told ya so! Now let's get into where it can be slightly different. Here is a function in js that takes in the parameters firstName and lastName.

```js
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

Now let's try and write this in TS. Go copy this snippet into `messaround.ts` and see if typescript is happy!

```ts
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

Turns out.... It's not. It's actually mad because on the parameters `firstName` and `lastName` we never specified what it's type was, and typescript doesn't have enough information here to make a good guess (we call this inferring). There's a number of ways to solve this but the fastest and easiest way right now is to just use a **Type Annotation**. Here, we're just going to say that the `firstName` and `lastName` parameters each have to be a string.

```ts
function getFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}
```

In this lesson this is about all the typescript you will need to understand. If you're curiosity is piqued check out [The Typescript Docs](https://www.typescriptlang.org/docs/) they are awesome. But for this lesson you really shouldn't need to do anything fancy other than that! We'll have more on this as we move forward!

### Writing Prisma Queries

To begin run this in your terminal:

```
npx prisma migrate dev
```

This will take your `prisma.schema` and generate a database for you. Before every test runs we will clear the database and seed the database. That means you'll always be working with the same data. To look at what that data should be you have two options:

1. Look at the `seed.ts` file to see what all get's seeded before each test
2. run `npx prisma studio` in your terminal to go through prisma's built in data explorer

That's all the help we're giving you on this one,

By now you know the drill about how these tested assignments work. Take a look at the `package.json`, there is a `test-all` script. That script will be the thing that runs every test you have to pass in order to get through this assignment. We're attempting to slowly take the training wheels off of you, and by now we believe you're ready to stop learning directly from what we tell you and extremely ready to start learning from documentation.

😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃

Read about the Prisma documentation [here](https://www.prisma.io/docs), run your tests, and get the code to pass

😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃
