import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
  model() {
    return this.store.createRecord('post')
  },
  actions: {
    savePost(post) {
      post.save().then(() =>{
         this.get('notifications').success('Hoot!! Hoot!! Your post is successful', {
          autoClear: true
        });
        this.transitionTo('post.show', post.slug);
      });
    }
  }
});
