
export default class BaseGridBuilder {
    constructor(divId, pageSize, columns) {
        if (this.constructor == BaseGridBuilder) {
            throw new TypeError("Can not construct abstract class.");
        }

        this._mainDiv = document.getElementById(divId);
        this._mainDiv.innerHTML = '';
        this._columns = columns;
        this._pageSize = pageSize;
        this._dataCount = 0;
    }

    buildHeader() {
        throw new Error('You have to implement the method \'buildHeader\'.');
    }

    buildBody(rebuild, responsePromise) {
        throw new Error('You have to implement the method \'buildBody\'.');
    }

    buildFooter(paginationCallback) {
        throw new Error('You have to implement the method \'buildFooter\'.');
    }
}