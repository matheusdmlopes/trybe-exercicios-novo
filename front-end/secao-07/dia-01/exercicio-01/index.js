import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
};

const action1 = { type: 'NEXT_COLOR' }
const action2 = { type: 'PREVIOUS_COLOR' }
const action3 = { type: 'RANDOM_COLOR' }

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

        case 'RANDOM_COLOR':

            return {
                ...state,
                colors: [...state.colors, criarCor()],
                index: state.colors.length
            }

        default:
            return state;
    }
}

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const previous = document.getElementById('previous')
const next = document.getElementById('next')
const random = document.getElementById('random')

next.addEventListener('click', () => {
    store.dispatch(action1)
})

previous.addEventListener('click', () => {
    store.dispatch(action2)
})

random.addEventListener('click', () => {
    store.dispatch(action3)
})

const store = createStore(reducer, composeWithDevTools())

store.subscribe(() => {
    const { colors, index } = store.getState();
    const colorElement = document.getElementById('value')
    const container = document.getElementById('container')

    container.style.backgroundColor = colors[index]
    colorElement.innerHTML = colors[index]
})

