let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "3" },
        { id: 2, message: "It's my first post", likesCount: "5" }
      ],
      newPostText: "default text"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Jorica" },
        { id: 2, name: "Petrica" },
        { id: 3, name: "Volodea" },
        { id: 4, name: "Anton" },
        { id: 5, name: "Cocos" }
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "How are you" },
        { id: 4, message: "Fine" },
        { id: 5, message: "Good" }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  addPost() {
    const newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
window.store = store; // for debugging purpose
