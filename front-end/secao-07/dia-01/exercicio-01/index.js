import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
};

const action1 = { type: 'NEXT_COLOR' }
const action2 = { type: 'PREVIOUS_COLOR' }

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NEXT_COLOR':

            return {
                ...state,
                index: state.index === state.colors.length - 1 ? 0 : state.index + 1
            }

        case 'PREVIOUS_COLOR':

            return {
                ...state,
                index: state.index === 0 ? state.colors.length - 1 : state.index - 1
            }
        default:
            return state;
    }
}

const previous = document.getElementById('previous')
const next = document.getElementById('next')

next.addEventListener('click', () => {
    store.dispatch(action1)
})

previous.addEventListener('click', () => {
    store.dispatch(action2)
})

const store = createStore(reducer, composeWithDevTools())

store.subscribe(() => {
    const { colors, index } = store.getState();
    const colorElement = document.getElementById('value')

    colorElement.innerHTML = colors[index]
})

