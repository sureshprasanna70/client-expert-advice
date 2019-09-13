import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  post_id: '',
  model(params) {
    this.set('post_id', params.post_id)
    return this.store.createRecord('post');
  },
  actions: {
    saveComment(comment) {
      let post_id = this.get('post_id');
      comment.set('post_id', post_id);
      comment.save().then(() => this.transitionTo('post'));
    }
  }
});
