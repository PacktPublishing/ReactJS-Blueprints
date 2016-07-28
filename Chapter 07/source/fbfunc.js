import Firebase from 'firebase';

module.exports = {
  uploadImage(url: string, user: string){
    let stringsRef = new Firebase(this.fbImageStream);
    let object = JSON.stringify(
      {
        url:url,
        user:user,
        timestamp: new Date().getTime(),
        likes:0
      }
    );
    console.log(object);
    stringsRef.push({
      text: object
    });
  },
  like(key) {
    var onComplete = function(error) {
      if (error) {
        console.log('Synchronization failed');
      } else {
        console.log('Synchronization succeeded');
      }
    };
    var firebaseRef = new Firebase(this.props.fbImageStream+`/${key}/likes`);
    firebaseRef.transaction(function(likes) {
      return likes+1;
    }, onComplete);
  },
  addComment(e,key){
    const comment = this.refs.comment.getValue();
    var onComplete = function(error) {
      if (error) {
        console.log('Synchronization failed');
      } else {
        console.log('Synchronization succeeded');
      }
    };
    let object = JSON.stringify(
      {
        comment:comment,
        user:this.props.username,
        timestamp: new Date().getTime()
      }
    );
    var firebaseRef = new Firebase(this.props.fbImageStream+`/${key}/comments`);
    firebaseRef.push({
      text: object
    }, onComplete);
  },
  removeItem(key) {
    var firebaseRef = new Firebase(this.props.fbImageStream);
    firebaseRef.child(key).remove();
  },
  resetDatabase() {
    let stringsRef = new Firebase(this.props.fbImageStream);
    stringsRef.set({});
  },
};

