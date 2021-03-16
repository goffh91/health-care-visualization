import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const getCurrentUrlToParam = () => 
    encodeURIComponent(
        window.location.pathname
        + window.location.search
        + window.location.hash
    );

export const forwardTo = location => {
    history.push(location);
}

export default history;
