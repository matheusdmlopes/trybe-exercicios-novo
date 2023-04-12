import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
    status: 'offline',
    theme: 'dark',
};

const action1 = { type: 'change theme' }
const action2 = { type: 'change status' }

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'change theme':
            return {
                ...state,
                theme: state.theme === 'dark' ? 'light' : 'dark'
            }
        case 'change status':
            return {
                ...state,
                status: state.status === 'offline' ? 'online' : 'offline'
            }
        default:
            break;
    }

}

const store = createStore(reducer, composeWithDevTools())

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
    store.dispatch(action1)
});

statusButton.addEventListener('click', () => {
    store.dispatch(action2)
});

store.subscribe(() => {
    const { theme, status } = store.getState();
    const getBody = document.body
    const statusElement = document.getElementById('status')
    const btnTheme = document.getElementById('toggle-theme')
    const btnStatus = document.getElementById('toggle-status')

    getBody.style.backgroundColor = theme === 'dark' ? 'black' : 'white'
    getBody.style.color = theme === 'dark' ? 'white' : 'black'

    statusElement.innerHTML = status === 'offline' ? 'Offline' : 'Online'

    btnStatus.innerText = status === 'online' ? 'Ficar Offline' : 'Ficar Online'
    btnTheme.innerText = theme === 'dark' ? 'Light Mode' : 'Dark Mode'
})