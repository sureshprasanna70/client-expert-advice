import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("login");
  this.route("signup");
  this.route("dashboard", { path: "" }, function() {});
  this.route('post',function(){
    this.route('show',{path:"/:id"})
  });
});

export default Router;
