import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(story) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        timeAgo: this.get('timeAgo'),
        photo: this.get('photo'),
        tag: this.get('tag'),
        text: this.get('text'),
        authorImg: this.get('authorImg')
      };
      this.sendAction('update', story, params);
    }
  }
});
