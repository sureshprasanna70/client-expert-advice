"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "client-expert-advice",
    environment,
    rootURL: "/",
    fontawesome: {
      icons: {
        'free-solid-svg-icons': 'all'
      }
    },
    'ember-cli-notifications': {
      includeFontAwesome: true
    },
    locationType: "auto",
    apiNamespace: "api/v1",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  
  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    
    ENV.serverURL = "http://localhost:3000";
    ENV.webURL = "http://localhost:4200";
    ENV.webSocketURL = "ws://localhost:3000/cable";
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }
  
  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";
    ENV.serverURL = "http://localhost:4200";
    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    
    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }
  
  if (environment === "production") {
    ENV.serverURL = "https://api-expert-advice.herokuapp.com";
    ENV.webURL = "https://client-expert-advice.netlify.com";
    ENV.webSocketURL = "ws://https://client-expert-advice.netlify.com/cable";
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    // here you can enable a production-specific feature
  }
  
  ENV.apiBaseURL = ENV.serverURL + "/" + ENV.apiNamespace;
  
  return ENV;
};
