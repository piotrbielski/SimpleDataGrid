import BaseGridBuilder from './BaseGridBuilder';
import DefaultDataLoader from '../dataLoaders/DefaultDataLoader';
import '../styles/grid.css';

export default class DefaultGridBuilder extends BaseGridBuilder {
    constructor(divId, pageSize, columns) {
        super(divId, pageSize, columns);

        this._table = document.createElement('table');
        this._table.setAttribute('id', 'sdg-table');
        this._table.setAttribute('class', 'sdg-table');

        this._mainDiv.appendChild(this._table);
    }
    
    set dataCount(value) {
        if (this._dataCount !== value) {
            this._dataCount = value;

            const comboboxNav = document.getElementById('sdg-combobox');
            const currentPage = +comboboxNav.value;

            this._refreshPagination(currentPage, true);
        }
    }

    get availablePageCount() {
        const count = Math.ceil(this._dataCount / this._pageSize);
        return count === 0 ? 1 : count;
    }
    
    buildHeader() {
        const headers = this._table.querySelectorAll('.sdg-head');
        headers.forEach(header => this._table.removeChild(header));

        const header = document.createElement('thead');
        header.setAttribute('id', 'sdg-head');
        header.setAttribute('class', 'sdg-head');
        this._table.append(header);

        const row = document.createElement('tr');
        header.appendChild(row);

        this._columns.forEach(column => {
            const th = document.createElement('th');
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
            body.setAttribute('id', 'sdg-body');
            body.setAttribute('class', 'sdg-body');
            this._table.appendChild(body);
        }

        const dataLoader = new DefaultDataLoader('sdg-body');
        const gridData = await dataLoader.loadData(responsePromise);
        const dataObjects = gridData.data;
        this.dataCount = gridData.count;

        dataObjects.forEach(dataObject => {
            const row = document.createElement('tr');
            body.appendChild(row);

            this._columns.forEach(column => {
                const cell = document.createElement('td');
                row.appendChild(cell);

                const element = column.getElement(dataObject);
                cell.appendChild(element);
                cell.style.width = column.width;
            });
        });
    }

    buildFooter(paginationCallback) {
        const footers = this._table.querySelectorAll('.sdg-foot');
        footers.forEach(footer => this._table.removeChild(footer));

        const footer = document.createElement('tfoot');
        footer.setAttribute('id', 'sdg-foot');
        footer.setAttribute('class', 'sdg-foot');
        this._table.appendChild(footer);

        const row = document.createElement('tr');
        footer.appendChild(row);

        const td = document.createElement('td');
        td.setAttribute('colspan', '100%');
        row.appendChild(td); 

        this._buildPagination(td, paginationCallback);
    }

    _buildPagination(tdElement, paginationCallback) {
        const initPage = 1;

        const pagination = document.createElement('div');
        pagination.setAttribute('class', 'sdg-pagination');
        tdElement.appendChild(pagination);

        const firstPage = document.createElement('a');
        firstPage.setAttribute('id', 'sdg-first');
        firstPage.innerText = '❮❮';
        pagination.appendChild(firstPage);

        const previousPage = document.createElement('a');
        previousPage.setAttribute('id', 'sdg-previous');
        previousPage.innerText = '❮';
        pagination.appendChild(previousPage);

        const combobox = document.createElement('select');
        combobox.setAttribute('id', 'sdg-combobox');
        pagination.appendChild(combobox);
        for (let i = 1; i <= this.availablePageCount; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerText = i;
            combobox.appendChild(option);
        }

        const nextPage = document.createElement('a');
        nextPage.setAttribute('id', 'sdg-next');
        nextPage.innerText = '❯';
        pagination.appendChild(nextPage);

        const lastPage = document.createElement('a');
        lastPage.setAttribute('id', 'sdg-last');
        lastPage.innerText = '❯❯';
        pagination.appendChild(lastPage);

        this._refreshPagination(initPage, false);

        const finalPaginationCallback = (event) => {
            const sender = event.target;
            
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
        const firstPageNav = document.getElementById('sdg-first');
        const previousPageNav = document.getElementById('sdg-previous');
        const nextPageNav = document.getElementById('sdg-next')
        const lastPageNav = document.getElementById('sdg-last');
        const comboboxNav = document.getElementById('sdg-combobox');

        firstPageNav.removeAttribute('class');
        previousPageNav.removeAttribute('class');
        nextPageNav.removeAttribute('class');
        lastPageNav.removeAttribute('class');

        if (changedDataCount) {
            comboboxNav.innerHTML = '';
            for (let i = 1; i <= this.availablePageCount; i++) {
                const option = document.createElement('option');
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