import DS from 'ember-data';
import {
  dasherize
} from "@ember/string";

export default DS.JSONAPISerializer.extend({
  keyForAttribute(key) {
    return dasherize(key);
  },
  serialize() {
    let json = this._super(...arguments);
    let attributes = json.data.attributes;

    if (attributes["post-id"]) {
      attributes["post_id"] = attributes["post-id"];
    }

    if (attributes["tag-list"]) {
      attributes["tag_list"] = attributes["tag-list"];
    }
    delete attributes["tag-list"];
    delete attributes["post-id"];
    delete attributes["views"];

    json.data.attributes = attributes;
    return json;
  }
});
