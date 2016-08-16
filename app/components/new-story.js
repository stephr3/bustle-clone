import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        timeAgo: this.get('timeAgo'),
        photo: this.get('photo'),
        tag: this.get('tag'),
        text: this.get('text'),
        authorImg: this.get('authorImg')
      };
      this.sendAction('save', params);
    }    
  }
});
