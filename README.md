# Version

Angular: 18.0.6
Module Federation: 18.0.6
cypress: 13.15.0
bootstrap: 5.3.3
karma: 6.4.0
karma-jasmine: 5.1.0

## run aplication

npm start
port: http://localhost:4000/

## Mock api json run:

json-server --watch db.json.
Endpoints:
http://localhost:3000/books
http://localhost:3000/profile
http://localhost:3000/publishers

## Login

email: admin@admin.com
pass: 123456

or click "Register" and create yours

## Running unit tests

Run `npm run test:mfe-books` for mfe-books with code-coverage  in directory: projects/mfe-books\
Run `npm run test:mfe-publisher` for mfe-publisher with code-coverage  in directory: projects/mfe-publisher\
Run `npm run test:shell` for shell with code-coverage  in directory: projects/shell

## Visualization code coverage

open folder "coverage", click right button on the file index.html of the chosen microfrontend . Choice "Open with Live Server"\
Open in browser exemple mfe-books:
![alt text](image-1.png)

Execution in microfrontends separate : entry in directory of application
projects/shell
projects/mfe-books
projects/mfe-publisher


## Running end-to-end tests

Run `npx cypress`in directory: host-app/projects/shell to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## Data Base

File: db.json project base 

## Directories Architeture
![image](https://github.com/user-attachments/assets/5725c8e6-2253-40a5-b383-774949acc92e)
![image](https://github.com/user-attachments/assets/688d6284-e643-4505-b3bd-54c2aaa94391)

## Description
# Project Overview

This project was created using **Angular version 18** and follows a **Microfrontend architecture** utilizing **Module Federation** and **Webpack**. The architecture consists of three microfrontends:

- **Shell**: Acts as the orchestrator for the other two microfrontends. To login, use the credentials:
  - **Username**: admin@admin.com
  - **Password**: 123456

- **mfe-books**: This microfrontend represents a list of books with full CRUD functionality (Create, Read, Update, Delete) and search features interacting with a mock API. *(Note: the booking icon feature is still under construction.)*

- **mfe-publisher**: This microfrontend represents a list of publishers, where data is consumed from local storage. The relationship between publishers and books is still under development.

### Key Features:
- **Shell**: Handles setting publisher data in local storage using `storageService` and `publisherService`.
- **mfe-publisher**: Consumes the publisher data from local storage and makes it available in the publisher list.
- **Login**: Includes a profile creation option via the “Register” button.


