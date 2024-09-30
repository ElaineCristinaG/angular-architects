const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
 output: {
    publicPath: "http://localhost:4200/", // URL do microfrontend
  },

  name: 'mfe-books',
  filename: 'remoteEntry.js',
  // scriptType: 'text/javascript',

  exposes: {
    './BooksCatalogModule'      :'./projects/mfe-books/src/app/books-catalog/books-catalog.module.ts',
    // './BooksCatalogComponent'   :'./projects/mfe-books/src/app/books-catalog/books-catalog.component.ts',
  },

  shared: {
    // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    shared: ["@angular/core", "@angular/common", "@angular/router"],
  },

});
