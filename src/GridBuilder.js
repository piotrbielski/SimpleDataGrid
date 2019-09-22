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
        const availablePageCount = Math.ceil(count / pageSize);
        const initPage = 1;

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

        const pagination = document.createElement('div');
        pagination.setAttribute('class', 'sdg-pagination');
        td.appendChild(pagination);

        const firstPage = document.createElement('a');
        firstPage.setAttribute('data-first-page', '');
        firstPage.innerText = '❮❮';
        pagination.appendChild(firstPage);

        const previousPage = document.createElement('a');
        previousPage.setAttribute('data-previous-page', '');
        previousPage.setAttribute('class', 'sdg-pagination-disabled');
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
        nextPage.setAttribute('data-next-page', '');
        nextPage.innerText = '❯';
        pagination.appendChild(nextPage);

        const lastPage = document.createElement('a');
        lastPage.setAttribute('data-last-page', '');
        lastPage.innerText = '❯❯';
        pagination.appendChild(lastPage);

        this._setPaginationNavigation(initPage, availablePageCount);
    }

    _setPaginationNavigation(currentPage, availablePageCount) {
        const firstPageNav = document.querySelector('.sdg-pagination a[data-first-page]');
        const previousPageNav = document.querySelector('.sdg-pagination a[data-previous-page]');
        const nextPageNav = document.querySelector('.sdg-pagination a[data-next-page]');
        const lastPageNav = document.querySelector('.sdg-pagination a[data-last-page]');

    }
}