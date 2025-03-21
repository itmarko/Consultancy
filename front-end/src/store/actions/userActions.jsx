// src/store/actions/userActions.js

// Action Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUserProfile = (profileData) => ({
  type: SET_USER_PROFILE,
  payload: profileData,
});

// Thunks (async actions)
export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    // Simulating API call for login
    const response = await fakeApiCall(email, password);

    if (response.success) {
      dispatch(loginSuccess(response.data)); // Dispatch the success action with the user data
    } else {
      dispatch(loginFailure(response.error)); // Dispatch failure if the login is unsuccessful
    }
  } catch (error) {
    console.error("oho Somthing wrong !", error);
    dispatch(loginFailure("Something went wrong!")); // Dispatch error if something goes wrong during API call
  }
};

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const response = await fakeApiCallToFetchUserProfile(); // Simulating an API call to fetch user profile data

    if (response.success) {
      dispatch(setUserProfile(response.data)); // Dispatch action to set user profile data
    }
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
};

// Fake API functions to simulate API calls (you can replace them with actual API calls)
const fakeApiCall = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        resolve({
          success: true,
          data: {
            id: 1,
            name: "John Doe",
            email: "user@example.com",
          },
        });
      } else {
        resolve({
          success: false,
          error: "Invalid email or password.",
        });
      }
    }, 1000);
  });
};

const fakeApiCallToFetchUserProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          id: 1,
          name: "John Doe",
          email: "user@example.com",
          address: "123 Main Street",
        },
      });
    }, 1000);
  });
};
