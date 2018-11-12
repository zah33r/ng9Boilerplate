# Angular Material 7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

- Before getting started, install node: 8.11.3 or greater (https://nodejs.org/en/download/)
- update npm @ 6.1.0 or greater to be compatible with angular cli for angular 7

check existing version of npm
```sh
$ npm -v
5.6.0
```

update npm to latest version
```sh
$ npm install -g npm@latest

$ npm -v
6.1.0
```

Install correct version of packages by using below command at the root of the project
```sh
$ npm ci
```
More about npm-ci here: https://docs.npmjs.com/cli/ci


The project provides boilerplate application structure for getting started with below items:
- Angular 7
- Angular Material 7
- Angular Flex
- Angular Router
- Angular Http Services
- Angular Guard
- Angular Shared Service
- AgGrid 17
- AgGrid Cell Renderer
- Angular Material Reactive Form Validators
- Multiple Environment Builds - DEV | QA | UAT | PROD
- Pre-setup Web.Config for IIS Routes
- File Uploading Component

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Custom commands are setup for multiple environments
- Run `npm run prod-build` for PROD
- Run `npm run qa-build` for QA
- Run `npm run uat-build` for UAT
- Run `npm run build` for all environments


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
