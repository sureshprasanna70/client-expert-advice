import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  post_id: '',
  post_slug: '',
  model(params) {
    this.set('post_id', params.post_id)
    this.set('post_slug', params.post_slug)
    return this.store.createRecord('post');
  },
  actions: {
    saveComment(comment) {
      let post_id = this.get('post_id');
      let post_slug = this.get('post_slug');
      comment.set('post_id', post_id);
      comment.save().then(() => {
        this.get('notifications').success('Saved successfully!', {
          autoClear: true
        });
        this.transitionTo('post.show',post_slug)
      });
    }
  }
});
