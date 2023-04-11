import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = { count: 0 }

const reducer = (state = initialState, action) => {
    if (action.type === 'Increment Counter') {
        return { count: state.count + 1 }
    }

    if (action.type === 'Decrement Counter') {
        return { count: state.count - 1 }
    }

    if (action.type === 'reset') {
        return { count: 0 }
    }

    return state
}

const store = createStore(reducer, composeWithDevTools())

const sum = { type: 'Increment Counter' }
const sub = { type: 'Decrement Counter' }
const reset = { type: 'reset' }

const buttonSum = document.getElementById('sum');
const buttonSub = document.getElementById('sub')
const buttonReset = document.getElementById('reset')
buttonSum.addEventListener('click', () => { store.dispatch(sum) })
buttonSub.addEventListener('click', () => { store.dispatch(sub) })
buttonReset.addEventListener('click', () => { store.dispatch(reset) })

store.subscribe(() => {
    const globalState = store.getState();
    const contador = document.querySelector('h2')
    contador.innerHTML = globalState.count

    console.log(globalState)
})