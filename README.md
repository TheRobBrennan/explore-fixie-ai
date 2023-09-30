# Welcome

This project has been created to explore development with [Fixie.AI Sidekicks](https://docs.ai-jsx.com/sidekicks/sidekicks-quickstart) and [AI.JSX](https://docs.ai-jsx.com) - inspired by the [Fixie Hackathon](https://fixieai.notion.site/Fixie-Hackathon-Guide-tinyurl-com-fixiehack-9e5efc849730427aa7f0c46073faf824) hosted in Seattle, WA on Saturday, September 16th, 2023.

## Example projects

### Fixie.AI Sidekick

If you'd like to see the fastest path to getting a Fixie.AI Sidekick up and running on Fixie, please check out the [guide](./quickstart-fixie-sidekicks/README.md):

![](./quickstart-fixie-sidekicks/images/Untitled%203.png)
![](./quickstart-fixie-sidekicks/images/Untitled%204.png)

### Next.js application with an embedded Fixie.AI Sidekick

This example will use [create-next-app](https://nextjs.org/docs/app/api-reference/create-next-app) to create an example [Next.js](https://nextjs.org/) application to show how we can embed our example [Fixie.AI Sidekick](https://docs.ai-jsx.com/sidekicks/sidekicks-quickstart) within a React application.

We will use [create-next-app](https://nextjs.org/docs/app/api-reference/create-next-app) to spin up an example project which:

- Uses [TypeScript](https://www.typescriptlang.org)
- Uses [ESLint](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)
- Does not use [Tailwind CSS](https://tailwindcss.com) - though feel free to enable that if you prefer
- Uses a [`src` directory](https://nextjs.org/docs/pages/building-your-application/configuring/src-directory) to keep our application code separate from configuration files
- Uses the [Next.js App Router](https://nextjs.org/docs/app)
- Uses an [import alias](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases) for making it easier to import modules

```sh
# Use the latest create-next-app to set up a new Next.js application
% npx create-next-app@latest
✔ What is your project named? … demo-nextjs-with-fixie-ai-sidekick
✔ Would you like to use TypeScript? … No / __Yes__
✔ Would you like to use ESLint? … No / __Yes__
✔ Would you like to use Tailwind CSS? … __No__ / Yes
✔ Would you like to use `src/` directory? … No / __Yes__
✔ Would you like to use App Router? (recommended) … No / __Yes__
✔ Would you like to customize the default import alias? … No / __Yes__
✔ What import alias would you like configured? … __@/*__
Creating a new Next.js app in /Users/rob/repos/explore-fixie-ai/demo-nextjs-with-fixie-ai-sidekick.

Using npm.

Initializing project with template: app


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/react
- @types/node
- @types/react-dom


added 30 packages, and audited 31 packages in 3s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created demo-nextjs-with-fixie-ai-sidekick at /Users/rob/repos/explore-fixie-ai/demo-nextjs-with-fixie-ai-sidekick

```

Once our app has been created, simply navigate to the appropriate directory and start your Next.js development server:

```sh
# Make sure you are in the appropriate directory
% cd demo-nextjs-with-fixie-ai-sidekick

# Install Fixie.AI dependencies
% npm install fixie --save

# Start your local development server
% npm run dev
```

Your application should be available at [http://localhost:3000](http://localhost:3000) 🤓
