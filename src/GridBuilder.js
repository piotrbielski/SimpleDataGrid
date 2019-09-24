import './styles/app.css';

export default class GridBuilder {
    constructor(divId) {
        const mainDiv = document.getElementById(divId);
        mainDiv.innerHTML = '';

        this._table = document.createElement('table');
        this._table.setAttribute('class', 'sdg-table');

        mainDiv.appendChild(this._table);
    }

    buildHeader(columns) {
        const headers = this._table.querySelectorAll('sdg-head');
        headers.forEach(header => this._table.removeChild(header));

        const header = document.createElement('thead');
        header.setAttribute('class', 'sdg-head');
        this._table.append(header);

        const row = document.createElement('tr');
        header.appendChild(row);

        columns.forEach(column => {
            const th = document.createElement('th');
            row.appendChild(th);

            th.innerText = column.title;
            th.style.width = column.width;
        });
    }

    buildBody(rebuild, columns, dataObjects) {
        if (rebuild) {
            const bodies = this._table.querySelectorAll('sdg-body');
            bodies.forEach(body => this._table.removeChild(body));
        }

        const body = document.createElement('tbody');
        body.setAttribute('class', 'sdg-body');
        this._table.appendChild(body);

        dataObjects.forEach(dataObject => {
            const row = document.createElement('tr');
            body.appendChild(row);

            columns.forEach(column => {
                const cell = document.createElement('td');
                row.appendChild(cell);

                const element = column.getElement(dataObject);
                cell.appendChild(element);
                cell.style.width = column.width;
            });
        });
    }

    buildFooter(count, pageSize, paginationCallback) {
        const footers = this._table.querySelectorAll('sdg-foot');
        footers.forEach(footer => this._table.removeChild(footer));

        const footer = document.createElement('tfoot');
        footer.setAttribute('class', 'sdg-foot');
        this._table.appendChild(footer);

        const row = document.createElement('tr');
        footer.appendChild(row);

        const td = document.createElement('td');
        td.setAttribute('colspan', '100%');
        row.appendChild(td); 

        this._buildPagination(td, count, pageSize, paginationCallback);
    }

    _buildPagination(tdElement, count, pageSize, paginationCallback) {
        const availablePageCount = Math.ceil(count / pageSize);
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
        pagination.appendChild(combobox);
        for (let i = 1; i <= availablePageCount; i++) {
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

        this._setPagination(initPage, availablePageCount);

        const finalPaginationCallback = (event) => {
            const sender = event.target;
            
            if (sender.getAttribute('class') != null)
                return;
            
            const page = sender.getAttribute('data-page');

            paginationCallback(page);
            this._setPagination(page, availablePageCount);
        };

        firstPage.addEventListener('click', (event) => finalPaginationCallback(event));
        previousPage.addEventListener('click', (event) => finalPaginationCallback(event));
        nextPage.addEventListener('click', (event) => finalPaginationCallback(event));
        lastPage.addEventListener('click', (event) => finalPaginationCallback(event));
    }

    _setPagination(currentPage, availablePageCount) {
        const firstPageNav = document.getElementById('sdg-first');
        const previousPageNav = document.getElementById('sdg-previous');
        const nextPageNav = document.getElementById('sdg-next')
        const lastPageNav = document.getElementById('sdg-last');

        firstPageNav.removeAttribute('class');
        previousPageNav.removeAttribute('class');
        nextPageNav.removeAttribute('class');
        lastPageNav.removeAttribute('class');

        if (!isNaN(firstPageNav.getAttribute(this._dataFirstAttribute)) || !isNaN(lastPageNav.getAttribute(this._dataLastAttribute))) {
            firstPageNav.setAttribute('data-page', 1);
            lastPageNav.setAttribute('data-page', availablePageCount);
        }

        if (currentPage == 1) {
            firstPageNav.setAttribute('class', 'sdg-pagination-disabled');
            previousPageNav.setAttribute('class', 'sdg-pagination-disabled');

            if (currentPage < availablePageCount) {
                nextPageNav.setAttribute('data-page', currentPage + 1);
            }
            else {
                nextPageNav.setAttribute('class', 'sdg-pagination-disabled');
                lastPageNav.setAttribute('class', 'sdg-pagination-disabled');
            }
        }
        else if (page < availablePageCount) {
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