
export default class BaseGridBuilder {
    constructor(divId) {
        if (this.constructor == BaseGridBuilder) {
            throw new TypeError("Can not construct abstract class.");
        }

        this._mainDiv = document.getElementById(divId);
        this._mainDiv.innerHTML = '';
    }

    buildHeader(columns) {
        throw new Error('You have to implement the method \'buildHeader\'.');
    }

    buildBody(rebuild, columns, dataObjects) {
        throw new Error('You have to implement the method \'buildBody\'.');
    }

    buildFooter(count, pageSize, paginationCallback) {
        throw new Error('You have to implement the method \'buildFooter\'.');
    }
}