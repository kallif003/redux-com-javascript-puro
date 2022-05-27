const redux = require("redux");
const createStore = redux.legacy_createStore;

//Actions

const CHANCE_USER = "CHANGE_USER";
const LOGOUT = "LOGOUT";

function changeUser(user) {
  return {
    type: CHANCE_USER,
    payload: user,
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

const initialState = {
  user: "",
  isLogged: false,
};

//Reducers

const useReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CHANCE_USER:
      return {
        ...prevState,
        user: action.payload,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...prevState,
        user: "",
        isLogged: false,
      };
    default:
      return prevState;
  }
};

const store = createStore(useReducer);

console.log("Initial state", store.getState());
store.dispatch(changeUser("kallif"));
console.log("New state", store.getState());
store.dispatch(logout());
console.log("New state", store.getState());
