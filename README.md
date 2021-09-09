# Background

`<auro-background>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for use as a way to show an image or background color around a block of code or in a slot when used in conjunction with other web components like `auro-banner`.  It is essentially an alternative to using custom css background css where your css styles are atomically scoped and media queries built in using a mobile first philosophy.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-background/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-background/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@aurolabs/auro-background?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurolabs/auro-background)
[![License](https://img.shields.io/npm/l/@aurolabs/auro-background?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurolabs/auro-background
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-background>` component.

```javascript
import "@aurolabs/auro-background";
```

**Reference component in HTML**

```html
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

### Bundle example code

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. `@latest` is NOT aware of any MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@aurolabs/auro-background@latest/dist/auro-background__bundled.js" type="module"></script>
```

## auro-background use cases

The `<auro-background>` element should be used in situations where users may:

* Insert a background image into any HTML block or slot element

## API Code Example

Default `auro-background`

```html
<auro-background bg="url(https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2) center center/cover no-repeat">
  <div style="color: var(--auro-color-text-primary-on-dark); display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <auro-header level="2" display="600">View all destinations</auro-header>
    <auro-hyperlink cta href="#">See where we fly</auro-hyperlink>
  </div>
</auro-background>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open two different shell sessions. One is for the **npm tasks**, the second is to run the **server**.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### API generation

The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

### Testing

Automated tests are required for every Auro component. See `.\test\auro-background.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Bundled assets

Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

### Demo deployment

To deploy a demo version of the component for review, run `npm run demo:build` to create a `./build` directory that can be pushed to any static server.

<small>Built from WC-Generator v3.7.4</small>
