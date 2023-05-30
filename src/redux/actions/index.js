// Auth
export const setUser = (x) => {
  return {
    type: "SET_USER",
    payload: x,
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};
