import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('post', params.id);
  },
  actions: {
    savePost(post) {
      post.save().then(() => this.transitionTo('post.show', post.slug));
    }
  }
});
