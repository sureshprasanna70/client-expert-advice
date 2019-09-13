import Controller from '@ember/controller';

export default Controller.extend({
  tags: [],
  actions: {
    addTag(tag) {
      let tags = this.get('tags');

      this.get('tags').pushObject(tag);
      this.set('model.tag_list', tags);
    },

    removeTagAtIndex(index) {
      let tags = this.get('tags');
      this.get('tags').removeAt(index);

      this.set('model.tag_list', tags);
    }
  }
});
