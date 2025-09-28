# JoyzAI FE Dev Angular Tree Assignment

## Candidate Details
- **Name:** Mohammed
- **UPI ID:** mohammadhirani13-2@oksbi

---

## Project Overview
This project is a simple Angular application that displays a **hierarchical tree structure**. The tree is rendered using a **recursive `TreeViewComponent`**, which takes a tree-like object (key → children array) and displays it as nested `<ul>/<li>` elements.

---

## Features
- Modular structure: Tree data stored separately in `tree-data.ts`.
- Recursive rendering of tree nodes using Angular components.
- Dynamic root detection: Automatically identifies the top-level root node.
- Minimal HTML/CSS to match assignment requirements exactly.
- Fully functional Angular app, runs without errors.

---

## Tree Data Example used in the project:
```ts
export const TREE_DATA = {
  "a": ["b", "c"],
  "b": ["d", "e"],
  "c": ["f", "g"],
  "e": ["h", "i"],
  "f": ["j", "k"]
};


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
