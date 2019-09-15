import Component from '@ember/component';
import {
  inject as service
} from "@ember/service";

export default Component.extend({
  currentSession: service(),
  actions:{
    deletePost(post){
      post.destroyRecord().then(() => {
        this.get('notifications').success('Post deleted successfully!', {
          autoClear: true
        });
      });
    }
  }
});
