// src/store/actions/postActions.js

// Action Types
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

// Action Creators
export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

// Thunks (async actions)
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest());

  try {
    // Simulating an API call to fetch posts
    const response = await fakeApiCallToFetchPosts();
    if (response.success) {
      dispatch(fetchPostsSuccess(response.data)); // Dispatch success action with fetched posts
    } else {
      dispatch(fetchPostsFailure(response.error)); // Dispatch failure action if fetching fails
    }
  } catch (error) {
    console.error("Failed",error);
    dispatch(fetchPostsFailure('Failed to fetch posts.'));
  }
};

export const createNewPost = (title, content) => async (dispatch) => {
  try {
    // Simulating an API call to create a new post
    const response = await fakeApiCallToCreatePost(title, content);
    if (response.success) {
      dispatch(createPost(response.data)); // Dispatch action to add the created post to the state
    }
  } catch (error) {
    console.error("Failed to create post:", error);
  }
};

export const updateExistingPost = (postId, updatedData) => async (dispatch) => {
  try {
    // Simulating an API call to update an existing post
    const response = await fakeApiCallToUpdatePost(postId, updatedData);
    if (response.success) {
      dispatch(updatePost(response.data)); // Dispatch action to update the post in the state
    }
  } catch (error) {
    console.error("Failed to update post:", error);
  }
};

export const deleteExistingPost = (postId) => async (dispatch) => {
  try {
    // Simulating an API call to delete a post
    const response = await fakeApiCallToDeletePost(postId);
    if (response.success) {
      dispatch(deletePost(postId)); // Dispatch action to remove the post from the state
    }
  } catch (error) {
    console.error("Failed to delete post:", error);
  }
};

// Fake API functions to simulate API calls (you can replace them with actual API calls)
const fakeApiCallToFetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: [
          { id: 1, title: 'First Post', content: 'This is the first post.' },
          { id: 2, title: 'Second Post', content: 'This is the second post.' },
        ],
      });
    }, 1000);
  });
};

const fakeApiCallToCreatePost = (title, content) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: { id: 3, title, content },
      });
    }, 1000);
  });
};

const fakeApiCallToUpdatePost = (postId, updatedData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: { id: postId, ...updatedData },
      });
    }, 1000);
  });
};

const fakeApiCallToDeletePost = (postId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: postId,
      });
    }, 1000);
  });
};
