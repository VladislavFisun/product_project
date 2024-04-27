import { render } from 'react-dom';
import './app/styles/index.scss';
import Provider from 'app/Provider';
import App from './app/App';
import './shared/config/i18n/i18n';

render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'),
);
