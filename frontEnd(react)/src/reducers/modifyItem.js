export const modifyItem = (state = { items: [], val: "" }, action) => {
  switch (action.type) {
    case"get":
    state={...state,items:action.data};
    break;
    case "add":
      state = {
        ...state,
        items: [...state.items, action.val],
        val: ""
      };
      break;
      case "change":
      state={
        ...state,
        val:action.val
      };
      break;
    case "edit":
    state={
      ...state,
      items: state.items.map((val, index, array) => {
        return val.id === action.ind ? action.item : val;
      })
    };
      break;
    case "delete":
    state={
      ...state,
      items: state.items.filter((val, index, array) => {
        return val.id !== action.ind ? val : null;
      })
    };
      break;
    default:
      break;
  }
  return state;
};

