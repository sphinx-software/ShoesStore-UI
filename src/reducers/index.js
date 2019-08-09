import { combineReducers }  from "redux";
import CartReducer          from "./CartReducer";
import DropDownReducer      from "./DropDownReducer";

export default combineReducers({
    Cart: CartReducer,
    DropDown: DropDownReducer
});

