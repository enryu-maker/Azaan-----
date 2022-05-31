import AsyncStorage from '@react-native-async-storage/async-storage';
export const Init = () => {
  return async dispatch => {
    let favourite = await AsyncStorage.getItem('favourite');
    if (favourite !== null) {
      dispatch({
        type: 'UPDATE_FAVOURITE',
        payload: favourite,
      });
    }
  };
};
export const updateFavourite = (current_List, newItem) => {
  return async dispatch => {
    let list = [];
    current_List.push(newItem);
    await AsyncStorage.setItem('favourite', JSON.stringify(current_List));
    list = current_List;
    dispatch({
      type: 'UPDATE_FAVOURITE',
      payload: list,
    });
  };
};
export const deleteFavourite=(current_List,index)=>{
  return async dispatch=>{
    current_List.splice(index, 1);
    let list = [];
    await AsyncStorage.setItem('favourite', JSON.stringify(current_List));
    list = current_List;
    dispatch({
      type: 'UPDATE_FAVOURITE',
      payload: list,
    });
  };
};
