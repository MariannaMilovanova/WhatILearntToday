//func can be
export const fetchUser0 = () => {
  return async function(dispatch) {
    axios
    .get('/api/current_user')
    .then(res => dispatch({
      type: FETCH_USER,
      payload: res
    }));
  }
};

export const fetchUser1 = (dispatch) => {
  return async function(dispatch) {
    const res = await axios.get('/api/current_user')
    dispatch({
      type: FETCH_USER,
      payload: res
    });
  }
};

export const fetchUser2 = () =>
  async function (dispatch) {
    const res = await axios.get('/api/current_user');
    return dispatch({
      type: FETCH_USER,
      payload: res
    });
  };

export const fetchUser3 = () =>
  async (dispatch)  => {
    const res = await axios.get('/api/current_user');
    return dispatch({
      type: FETCH_USER,
      payload: res
    });
  };


