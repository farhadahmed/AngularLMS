# AngularLMS

A simple LMS demo using Angular 17. On the home page, listed courses are retrieved from jsonbin.io via their REST API. Clicking on a course then takes the user to the details page. Here we again use JS promises to send a get request and display information for the course with the matching ID. The Access Key is visible but it's safe since it only has read permission.

## App Demo

The app has been deployed on AWS and can be tested here: https://master.d316e6rc2vihw4.amplifyapp.com/ 

## Technologies and features used.
* JavaScript
* Angular 17
* TypeScript
* HTML
* CSS
* Fetch API
* Promises
* Async/await

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
