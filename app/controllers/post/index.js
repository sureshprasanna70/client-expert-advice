import Controller from '@ember/controller';
import {
  filterBy
} from '@ember/object/computed';
import {
  inject as service
} from "@ember/service";

export default Controller.extend({
  currentSession: service(),
  posts: filterBy('model', 'post_id', null),
});
