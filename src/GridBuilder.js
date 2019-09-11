import './styles/app.css';

export default class GridBuilder {
    constructor(divId) {
        const mainDiv = document.getElementById(divId);
        mainDiv.innerHTML = '';

        this._table = document.createElement('table');
        this._table.setAttribute('class', 'sdg-table');

        mainDiv.appendChild(this._table);
    }

    buildHeader(rebuild, columns) {
        if (rebuild) {
            const headers = this._table.querySelectorAll('sdg-header');
            headers.forEach(header => this._table.removeChild(header));
        }

        const header = document.createElement('thead');
        header.setAttribute('class', 'sdg-header');
        this._table.append(header);

        const row = document.createElement('tr');
        header.appendChild(row);

        columns.forEach(column => {
            const th = document.createElement('th');
            row.appendChild(th);

            th.innerText = column.title;
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

            columns.appendChild(column => {
                const cell = document.createElement('td');
                row.appendChild(cell);

                const element = column.getElement(dataObject);
                cell.appendChild(element);
            });
        });
    }

    buildFooter(rebuild) {
        
    }
}