# Coursera UI
An experiment to create reusable component library using the latest front-end technologies.

[![travis build][travis-svg]][travis-url]
[![codecov coverage][codecov-svg]][codecov-url]
[![version][npm-version-svg]][npm-url]

## Table of Contents

- [How to Use](#how-to-use)
- [Libraries](#libraries)
- [Feature List](#feature-list)
- [How to Contribute](#how-to-contribute)


## How to Use
- Clone the repo and run `npm install`
- `npm run storybook` and visit http://localhost:9000 (depends on the availability) and you'll see the stories
- `npm start` Run the actual app
- `npm run test`  Run all the tests in tests directory and eslint
- `npm run test:only` Run tests without eslint
- `npm run test:w` Watch and run the tests
- `npm run lint` Lint the js files using airbnb's eslint and flow config
- `npm run lint:fix` Lint and try to fix some basic linting errors
- `npm run publish-storybook` Will publish the story at [https://vidaaudrey.github.io/coursera-ui](https://vidaaudrey.github.io/coursera-ui)

- Required Global Installations
  - `npm install -g semantic-release-cli getstorybook`

## Feature List
### Utilities
- [ ] Reset [Reboot](http://v4-alpha.getbootstrap.com/content/reboot/)
- [ ] Colors
- [ ] Breakpoints
- [ ] Spacing
- [ ] Theme
  - [ ] Palette
  - [ ] Gradient
  - [ ] Shadow?
- [ ] Fonts
- [ ] zIndex
- [ ] Other Common Utils
    - [ ] w-100
    - [ ] floating
    - [ ] centering
    - [ ] text-alignment
    - [ ] text-transform
    - [ ] font-weight
    - [ ] contextual-color
    - [ ] display
    - [ ] clearfix
    - [ ] fixed-positioning
    - [ ] invisible (!== display:none)
    - [ ] text-hide?
    - [ ] screen readers: sr-only, sr-only-focusable

### Components

#### Basic
- [ ] Grid, Layout
- [ ] Typography (remove all margin tops, have 0.5rem margin bottom)
- [ ] List
- [ ] Table
- [ ] Form
  - [ ] Input
  - [ ] Checkbox
  - [ ] Radio
  - [ ] Toggle
  - [ ] Select / Dropdown
  - [ ] Button
  - [ ] ButtonLink
  - [ ] Label
  - [ ] Form
- [ ] Link
- [ ] Icon
- [ ] Card
- [ ] Divider
- [ ] Dialog/Modal
- [ ] Blockquote
- [ ] Nav
- [ ] Tag

#### Extended
- [ ] Notification
- [ ] Jumbotron
- [ ] Alert
- [ ] Tooltip
- [ ] Popover
- [ ] Pagination
- [ ] Tab
- [ ] Badge
- [ ] Loader
- [ ] Drawer
- [ ] HeaderPanel
- [ ] Validated form inputs
    - [ ] EmailInput
    - [ ] PhoneInput
    - [ ] AddressInput
    - [ ] ZipInput
    - [ ] CreditCardInput
- [ ] List
    - [ ] Draggable
    - [ ] StepList
    - [ ] Breadcrumb
- [ ] Media
- [ ] EditableInput
- [ ] LoginForm
- [ ] LogoutForm
- [ ] CreditCard
- [ ] VideoPlayer
- [ ] FileDrop
- [ ] Uploaders
    - [ ] FileUploader
    - [ ] ImageUploader
    - [ ] VideoUploader (need additional processing)
- [ ] ProgressBar
- [ ] Collapsible
- [ ] Scrollable
- [ ] ShoppingCart
- [ ] Menu
- [ ] AutoComplete
- [ ] Ellipsis
- [ ] CopyToClipboard

#### Animation & Transition

#### Super Rich Components
- [ ] SyntaxHighlighter
- [ ] MarkdownViewer
- [ ] Calendar
- [ ] DocPreview

#### Charts
- [ ] Donut
- [ ] Bar
- [ ] Timeseries

#### Vendor Services
- [ ] GoogleMap
- [ ] Transloader
- [ ] Imgix

#### Composables (align with recompose)
- [ ] withTheme
- [ ] withRoute
- [ ] withApiHandler
- [ ] withHover (add mouse over and leave to existing component)
- [ ] mapStateToProps
- [ ] ....

#### Common States and Behaviors
- [ ] Key interaction
- API State: API_BEFORE_SEND, API_IN_PROGRESS, API_SUCCESS, API_ERROR


## Libraries
- [Create React App] (https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- [Storybook](https://github.com/kadirahq/react-storybook)
- [Recompose][recompose]
- [Aphrodite][aphrodite]
-
## How to Contribute
- [Understanding Semantic Release](https://github.com/semantic-release/semantic-release)
- [Commit Guidelines, format and tool](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-writing-conventional-commits-with-commitizen).
- Commit Types. Ref[Angular Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md)
  - feat: A new feature
  - fix: A bug fix
  - docs: Documentation only changes
  style: Changes that do not affect the meaning of the code (white-space, - formatting, missing semi-colons, etc)
  - refactor: A code change that neither fixes a bug nor adds a feature
  - perf: A code change that improves performance
  - test: Adding missing tests
  - chore: Changes to the build process or auxiliary tools and libraries such as - documentation generation
  - build: changes that affect the build system or external dependencies
  - ci: changes to travis
  - revert: revert a previous commit

- Scopes
  - TODO

### Documentation
We use git wiki to manage all our documentations. You can edit it online or within our repo's docs directory. [How to use git wiki as submodule][git-wiki-as-submodule]



### Testing
```js
import sinon from 'sinon';
import { expect } from 'chai';
```

### Coverage Reporting


### Continuous Integration
We use Travis CI.

## Deployment

## Build


## Something Missing?

[package-url]: https://www.npmjs.com/package/coursera-ui
[npm-version-svg]: https://img.shields.io/npm/v/coursera-ui.svg?style=flat-square
[npm-url]: http://npm.im/coursera-ui
[codecov-svg]: https://img.shields.io/codecov/c/github/vidaaudrey/coursera-ui.svg?style=flat-square
[codecov-url]: https://codecov.io/github/vidaaudrey/coursera-ui
[travis-svg]: https://img.shields.io/travis/vidaaudrey/coursera-ui.svg?style=flat-square
[travis-url]: https://travis-ci.org/vidaaudrey/coursera-ui
[git-wiki-as-submodule]: https://brendancleary.com/2013/03/08/including-a-github-wiki-in-a-repository-as-a-submodule/
[recompose]: https://github.com/acdlite/recompose
[aphrodite]: https://github.com/Khan/aphrodite
