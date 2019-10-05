import BaseDataLoader from './base-data-loader';
import '../styles/loader.css';

export default class DefaultDataLoader extends BaseDataLoader {
    constructor(elementToLoad) {
        super(elementToLoad);
    }

    _addLoader() {
        const dotCount = 8;

        const loaderRow = document.createElement('tr');
        loaderRow.setAttribute('data-element', 'loader');

        const loaderCell = document.createElement('td');
        loaderCell.setAttribute('colspan', '100%');
        loaderRow.appendChild(loaderCell);

        const loaderDiv = document.createElement('div');
        loaderDiv.setAttribute('class', 'sdg-loader-div');
        loaderCell.appendChild(loaderDiv);

        const loader = document.createElement('div');
        loader.setAttribute('class', 'sdg-loader');
        loaderDiv.append(loader);

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            loader.appendChild(dot);
        }

        this._elementToLoad.appendChild(loaderRow);
    }

    _removeLoader() {
        const loaderRow = this._elementToLoad.querySelector('tr[data-element="loader"]');
        this._elementToLoad.removeChild(loaderRow);
    }

    async loadData(responsePromise) {
        this._addLoader();

        const awaitedResponse = await responsePromise;
        const json = await awaitedResponse.json();

        this._removeLoader();

        return {
            data: json.data,
            count: json.count
        };
    }
}