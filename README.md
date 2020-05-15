# Angular Material 9

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

- Before getting started, install node: v14.2.0 or greater (https://nodejs.org/en/download/)
- update npm @ 6.14.4 or greater to be compatible with angular cli for angular 9

check existing version of npm
```sh
$ npm -v
5.6.0
```

update npm to latest version
```sh
$ npm install -g npm@latest

$ npm -v
6.14.4
```

Install correct version of packages by using below command at the root of the project
```sh
$ npm ci
```
More about npm-ci here: https://docs.npmjs.com/cli/ci


The project provides boilerplate application structure for getting started with below items:
- Angular 9
- Angular Material 9
- Angular CDK
- Angular Flex
- Angular Router
- Angular Http Services
- Angular Guard
- Angular Shared Service
- AgGrid 23
- AgGrid Cell Renderer Sample
- Angular Material Reactive Form Validators Sample
- Multiple Environment Builds - DEV | QA | UAT | PROD
- Pre-setup Web.Config for IIS Routes
- File Uploading Component Sample

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
