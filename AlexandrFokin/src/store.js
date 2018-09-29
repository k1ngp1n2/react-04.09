// библиотека для создания контейнеров, используемых для хранения состояния приложения
import {createStore} from 'redux';
// обрабатывает action и меняет содержимое store
import rootReducer from 'reducers';

/**
 * Создает store - хранилище состояния приложения
 */
export default createStore(rootReducer);