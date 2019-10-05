import BaseColumn from './base-column';

export default class ValueColumn extends BaseColumn {
    constructor(title, objectField, width) {
        super(title, width);

        this.objectField = objectField;
    }

    getElement(dataObject) {
        let span = document.createElement('span');
        span.innerText = dataObject[this.objectField];

        return span;
    }
}