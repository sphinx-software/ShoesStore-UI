const defaultState = [
    {
        dropdown: true
    }
]

const DropDownReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DROP_DOWN':
            return [
                ...state,
                {
                    dropdown: !state.dropdown
                }
            ]
        default:
            return state
    }
}

export default DropDownReducer;
