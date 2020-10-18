import customer from "./customer";

export const ACTION_TYPE = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  customer
    .cusOrderDetails()
    .fetchAll.then((response) => {
      dispatch({
        type: ACTION_TYPE.FETCH_ALL,
        paylood: response.data,
      });
    })
    .catch((err) => console.log(err));
};
