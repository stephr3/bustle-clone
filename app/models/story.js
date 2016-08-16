import DS from 'ember-data';

export default DS.Model.extend({
  tag:  DS.attr(),
  photo: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  authorImg: DS.attr(),
  timeAgo: DS.attr(),
  text: DS.attr()
});
