import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  views: DS.attr('number'),
  post_id: DS.attr('number'),
  user_id: DS.attr('number'),
  post: DS.belongsTo("post", {
    inverse: "comments"
  }),
  comments: DS.hasMany('post', {
    inverse: "post"
  }),
  user: DS.belongsTo('user'),
  tag_list: DS.attr(),
  slug: DS.attr('string')
});
