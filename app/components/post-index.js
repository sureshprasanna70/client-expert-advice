import Component from '@ember/component';
import {
  inject as service
} from "@ember/service";

export default Component.extend({
  currentSession: service(),
  actions:{
    deletePost(post){
      post.destroyRecord().then(() => {
        this.sendAction('reloadPost');
        this.get('notifications').success('Post deleted successfully!', {
          autoClear: true
        });
      });
    }
  }
});
