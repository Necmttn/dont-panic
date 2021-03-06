# DON'T PANIC

# The Hitchhiker's Guide to the <s>Galaxy</s>  Web 3

The Hitchhiker's Guide to the <s>Galaxy</s> Web 3 was a “wholly remarkable book." It had been compiled and recompiled many times over many years and under many different <s>editorships</s> daos. It contained contributions from countless numbers of travellers and researchers.

<p align="center">
    <img src="https://static.wikia.nocookie.net/hitchhikers/images/e/e1/Guide.jpg/revision/latest?cb=20080505045130">
</p>



## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

<!-- - `docs`: a [Next.js](https://nextjs.org) app -->
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `mdx`: utils for the MDX compiler


## Workspaces
-- Apps.
--- `learn-next---docs`: a [Next.js](https://nextjs.org) app which host tutorials 
----- `learn` : sub route in the application which is the main page of the tutorial
------ `learn`/<tutorial-name>/<tutorial-section.> : 
----- `proposal` : sub route in the application which is the main page of the proposal
------ `proposal`/<proposal-name>: proposal page with current status. and quick actions to vote, comment, etc. 
------ `<profile/builder>/<user-name/user-wallet-address>: profile page of the user.

-- Packages.
--- `configs`: configuration files for the monorepo




### Tutorials
- [Solana Wallet Balance](/tutorials/solana-wallet-balance)
- [Near Wallet Balance](/tutorials/near-wallet-balance)


## TO-DOS
- [] https://kodiakhq.com/ Automate your GitHub Pull Requests
