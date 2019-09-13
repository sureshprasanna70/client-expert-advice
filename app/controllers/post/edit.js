import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
export default Controller.extend({
  tags: computed.alias('model.tag_list'),
  actions: {
    addTag(tag) {
      this.get('tags').pushObject(tag);
      let tags = this.get('tags');
      this.set('model.tag_list', tags);
    },
    removeTagAtIndex(index) {
      this.get('tags').removeAt(index);
      let tags = this.get('tags');
      this.set('model.tag_list', tags);
    }
  }
});
