# SlideshowInAngular

\- Angular 21 application (with [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0) + Bootstrap 5 and RxJS.

\- Slideshow with some images.

\- See the root of this project for example image.

## Installation + run app

**Command to install**

_npm install_

or shorter:

_npm i_

**Command to run the application:**

_ng serve --open_

or shorter:

_ng s --o_

## Application

A demo slideshow with some images.

Experiment with NgOptimizedImage.

### **Changelog:**

_June 2026_

\- Upgrade to _Angular 22_ and upgraded other packages.

\- Migrated _@Injectable_ to _@Service_.

\- Using the default: _ChangeDetectionStrategy.OnPush_ in stead of _ChangeDetectionStrategy.Eager_.

\- Using the latest file naming conventions - and deleting the old schematics from _angular.json_

\- Changed to _daisyUI_/_Tailwind CSS_ in stead of _Bootstrap 5_.

\- Changed to _heroicons_ in stead of _Bootstrap icons_.

_November 2025_
\- Upgrade to _Angular 21_ and upgraded other packages.

*   Removed deprecated _Karma_ and installed _Vitest._
*   Migrated _Jasmine_ tests to _Vitest_ tests for future use (command: **ng generate refactor-jasmine-vitest**).

\- Migrations to _Zoneless_ (No _Zone.js_ - removed package _zone.js_)

\- Added 1 new image.

\- Reduced the sizes of the images.

\- Various minor changes.

_June 2025_

\- Upgrade to Angular 20. 

\- Using the keyword **protected** for properties that are only accessible in the template.

\- Various small changes.