import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({
  infinity: service(),
  setupController: function (controller, model) {
    this._super(...arguments);
    let searchedTag = model.extraParams.tag
    if (searchedTag) {
      controller.set('tagSearch', true);
      controller.set('searchedTag', searchedTag);
    } else {
      controller.set('tagSearch', false)
    }
  },
  queryParams: {
    tag: {
      refreshModel: true
    }
  },
  model(params) {
    const tag = params.tag;
    return this.infinity.model("post", {
      perPage: 5,
      tag: tag,
      totalPagesParam: "meta.pages",
      countParam: "meta.total"
    });
  }
});
