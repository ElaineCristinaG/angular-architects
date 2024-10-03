// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = withModuleFederationPlugin({
//   name: 'shell',

//   // scriptType: 'text/javascript',

//   //olha para o microfrontend inteiro:
//   remotes: {
//     "mfe-books"    : "mfe-books@http://localhost:4200/remoteEntry.js", 
//     "mfe-publisher": "mfe-publisher@http://localhost:4201/remoteEntry.js", 
//     // "mfe-books"    : "http://localhost:4200/remoteEntry.js", 
//     // "mfe-publisher": "http://localhost:4201/remoteEntry.js", 
       
//   },

//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    
//   },

// });
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4000/", 
  },
  plugins: [
    new ModuleFederationPlugin({
     remotes: {
    "mfe-books"    : "mfe-books@http://localhost:4200/remoteEntry.js", 
    "mfe-publisher": "mfe-publisher@http://localhost:4201/remoteEntry.js", 

       
  },
      shared: ["@angular/core", "@angular/common", "@angular/router"], 
    }),
  ],
};
