import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';


export default Route.extend({
  session: service(),
  model(params) {
    return this.store.findRecord('post', params.id);
  }
});
