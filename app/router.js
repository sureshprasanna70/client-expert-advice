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
    this.route('new',{path:"/new"})
    this.route('show',{path:"/:id"})
    this.route('edit',{path:"/edit/:id"})
    this.route('comment',{path: '/comment/:post_id'});
  });
});

export default Router;
