import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('story', {
      orderBy: 'tag',
      equalTo: 'fashion and beauty'
    });
  }
});
