import React from 'react';
import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: text => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
