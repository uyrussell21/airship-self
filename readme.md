# Important points

### Quick Rules

_some points_

- pure HTML + SCSS yung gagamitin niyo, no react muna
- you'll setup your own project, but shared repo with your own branch
- i'll give the home page design lang
- gagawin niyo each, yung buong home page on your own
- the home page should be pushed to the repo within 5 days
- you can ask anyone
- code review session with Da and Neil (Venneth pwede ka sumama) after everyone has submitted
- breakpoints ng media query will be based on bootstrap's

_what I'll provide:_

- design for home page
- gitlab repo

_git best practice:_

- when you have your own branch, every accomplishment, kunyari natapus niyo header, commit and push agad

### Referrences

- Final Design: [https://zpl.io/25QOK0Q](https://zpl.io/25QOK0Q)
- [https://docs.emmet.io/cheat-sheet/](https://docs.emmet.io/cheat-sheet/)
- [https://www.tutorialspoint.com/javascript/index.htm](https://www.tutorialspoint.com/javascript/index.htm)
- [https://dev.to/javinpaul/the-2019-web-development-frontend-backend-roadmap-4le2](https://dev.to/javinpaul/the-2019-web-development-frontend-backend-roadmap-4le2)
- [https://github.com/vercel/next.js/tree/canary/examples](https://github.com/vercel/next.js/tree/canary/examples)
- [https://git-scm.com/doc](https://git-scm.com/doc)
- [https://www.internetingishard.com/html-and-css/semantic-html/](https://www.internetingishard.com/html-and-css/semantic-html/)
- [https://nextjs.org/](https://nextjs.org/)

### Minimum Breakpoints

```
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

# Next.js

- This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Installation

```
# clone the repo
$ git clone https://gitlab.com/botbrosai/airship/airship-web.git

# go into app directory
$ cd `airship-web` branch: [master]

# install app dependencies
$ npm install or yarn install

# run the app
$ npm run dev or yarn dev

open you localhost:3000 or localhost:8000 depends on your package.json scripts
```

## Design System

- Bootstrap 4x or Latest

## File Structure

```
- src
  - components
    - Modals
    - Header
    - Footer
  - containers
    - Homepage
      - components
        - HomepageHeader.jsx
        - HomepageTitle.jsx
      - index.jsx
      - style.scss
    - Signup
```

## Naming Conventions

- Folder and File Naming - Pascal Case
- src Folders and files with names should be lowercase:

1. components
2. index.js
3. styles.module.scss

- Styled components CSS samples:

1. hello-world - className={styles["hello-world"]}
2. hello - className={styles.hello}

## Development Workflow & Notes

- Branch Naming: All small letters

1. feature/landing-page
2. bugfix/landing-page
3. hotfix/landing-page

Notes:

- You will only branch out to dev
- Always commit small
- Limit your code Line of 100 max 150 per file
- Use Bootstrap Components as much as possible

## Folder Use

1. pages - where the routes will be created
2. api - where the axios and services
3. components - reusable
4. pages - page components
5. styles/theme - global styles
6. public - where the assests will be found
