import BaseGridBuilder from './base-grid-builder';
import DefaultDataLoader from '../data-loaders/default-data-loader';
import '../styles/grid.css';

export default class DefaultGridBuilder extends BaseGridBuilder {
    constructor(divId, pageSize, columns) {
        super(divId, pageSize, columns);

        this._table = document.createElement('table');
        this._table.setAttribute('class', 'sdg-table');

        this._mainDiv.appendChild(this._table);
    }

    set dataCount(value) {
        if (this._dataCount !== value) {
            this._dataCount = value;

            let comboboxNav = document.querySelector(`div#${this._mainDiv.id} select[data-element="combobox"]`);//document.getElementById('sdg-combobox');
            let currentPage = +comboboxNav.value;

            this._refreshPagination(currentPage, true);
        }
    }

    get availablePageCount() {
        let count = Math.ceil(this._dataCount / this._pageSize);
        return count === 0 ? 1 : count;
    }
    
    buildHeader() {
        let headers = this._table.querySelectorAll('.sdg-head');
        headers.forEach(header => this._table.removeChild(header));

        let header = document.createElement('thead');
        header.setAttribute('class', 'sdg-head');
        this._table.append(header);

        let row = document.createElement('tr');
        header.appendChild(row);

        this._columns.forEach(column => {
            let th = document.createElement('th');
            row.appendChild(th);

            th.innerText = column.title;
            if (column.width) {
                th.style.width = column.width;
            }
        });
    }

    async buildBody(rebuild, responsePromise) {
        let body = null;

        if (rebuild) {
            body = this._table.querySelector('.sdg-body');
            body.innerHTML = '';
        }
        else {
            body = document.createElement('tbody');
            body.setAttribute('class', 'sdg-body');
            this._table.appendChild(body);
        }

        let dataLoader = new DefaultDataLoader(body);
        let gridData = await dataLoader.loadData(responsePromise);
        let dataObjects = gridData.data;
        this.dataCount = gridData.count;

        dataObjects.forEach(dataObject => {
            let row = document.createElement('tr');
            body.appendChild(row);

            this._columns.forEach(column => {
                let cell = document.createElement('td');
                row.appendChild(cell);

                let element = column.getElement(dataObject);
                cell.appendChild(element);
                cell.style.width = column.width;
            });
        });
    }

    buildFooter(paginationCallback) {
        let footers = this._table.querySelectorAll('.sdg-foot');
        footers.forEach(footer => this._table.removeChild(footer));

        let footer = document.createElement('tfoot');
        footer.setAttribute('class', 'sdg-foot');
        this._table.appendChild(footer);

        let row = document.createElement('tr');
        footer.appendChild(row);

        let td = document.createElement('td');
        td.setAttribute('colspan', '100%');
        row.appendChild(td); 

        this._buildPagination(td, paginationCallback);
    }

    _buildPagination(tdElement, paginationCallback) {
        let initPage = 1;

        let pagination = document.createElement('div');
        pagination.setAttribute('class', 'sdg-pagination');
        tdElement.appendChild(pagination);

        let firstPage = document.createElement('a');
        firstPage.setAttribute('data-element', 'first');
        firstPage.innerText = '❮❮';
        pagination.appendChild(firstPage);

        let previousPage = document.createElement('a');
        previousPage.setAttribute('data-element', 'previous');
        previousPage.innerText = '❮';
        pagination.appendChild(previousPage);

        let combobox = document.createElement('select');
        combobox.setAttribute('data-element', 'combobox');
        pagination.appendChild(combobox);
        for (let i = 1; i <= this.availablePageCount; i++) {
            let option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerText = i;
            combobox.appendChild(option);
        }

        let nextPage = document.createElement('a');
        nextPage.setAttribute('data-element', 'next');
        nextPage.innerText = '❯';
        pagination.appendChild(nextPage);

        let lastPage = document.createElement('a');
        lastPage.setAttribute('data-element', 'last');
        lastPage.innerText = '❯❯';
        pagination.appendChild(lastPage);

        this._refreshPagination(initPage, false);

        let finalPaginationCallback = (event) => {
            let sender = event.target;
            
            if (sender.getAttribute('class') != null)
                return;
            
            let page = +sender.getAttribute('data-page');            
            if (page === 0) {
                page = +sender.value;
            }

            this._refreshPagination(page, false);
            paginationCallback(page);
        };

        firstPage.addEventListener('click', (event) => finalPaginationCallback(event));
        previousPage.addEventListener('click', (event) => finalPaginationCallback(event));
        nextPage.addEventListener('click', (event) => finalPaginationCallback(event));
        lastPage.addEventListener('click', (event) => finalPaginationCallback(event));
        combobox.addEventListener('change', (event) => finalPaginationCallback(event));
    }

    _refreshPagination(currentPage, changedDataCount) {
        let firstPageNav = document.querySelector(`div#${this._mainDiv.id} a[data-element="first"]`);
        let previousPageNav = document.querySelector(`div#${this._mainDiv.id} a[data-element="previous"]`);
        let nextPageNav = document.querySelector(`div#${this._mainDiv.id} a[data-element="next"]`);
        let lastPageNav = document.querySelector(`div#${this._mainDiv.id} a[data-element="last"]`);
        let comboboxNav = document.querySelector(`div#${this._mainDiv.id} select[data-element="combobox"]`);

        firstPageNav.removeAttribute('class');
        previousPageNav.removeAttribute('class');
        nextPageNav.removeAttribute('class');
        lastPageNav.removeAttribute('class');

        if (changedDataCount) {
            comboboxNav.innerHTML = '';
            for (let i = 1; i <= this.availablePageCount; i++) {
                let option = document.createElement('option');
                option.setAttribute('value', i);
                option.innerText = i;
                comboboxNav.appendChild(option);
            }
        }

        comboboxNav.value = currentPage;

        if (!isNaN(firstPageNav.getAttribute('data-page')) || !isNaN(lastPageNav.getAttribute('data-page'))) {
            firstPageNav.setAttribute('data-page', 1);
            lastPageNav.setAttribute('data-page', this.availablePageCount);
        }

        if (currentPage == 1) {
            firstPageNav.setAttribute('class', 'sdg-pagination-disabled');
            previousPageNav.setAttribute('class', 'sdg-pagination-disabled');

            if (currentPage < this.availablePageCount) {
                nextPageNav.setAttribute('data-page', currentPage + 1);
            }
            else {
                nextPageNav.setAttribute('class', 'sdg-pagination-disabled');
                lastPageNav.setAttribute('class', 'sdg-pagination-disabled');
            }
        }
        else if (currentPage < this.availablePageCount) {
            previousPageNav.setAttribute('data-page', currentPage - 1);
            nextPageNav.setAttribute('data-page', currentPage + 1);
        }
        else {
            previousPageNav.setAttribute('data-page', currentPage - 1);

            nextPageNav.setAttribute('class', 'sdg-pagination-disabled');
            lastPageNav.setAttribute('class', 'sdg-pagination-disabled');
        }
    }
}