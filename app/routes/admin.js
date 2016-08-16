import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },
  actions: {
    delete(story) {
      if(confirm('Are you sure you want to delete this story?')){
        story.destroyRecord();
        this.transitionTo('admin');
      }
    },
    save(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('admin');
    }
  }
});
