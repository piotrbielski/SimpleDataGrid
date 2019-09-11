import BaseColumn from './BaseColumn';

export default class ValueColumn extends BaseColumn {
    constructor(title, objectField, width) {
        super(title, width);

        this.objectField = objectField;
    }

    getElement(dataObject) {
        const span = document.createElement('span');
        span.innerText = dataObject[this.objectField];

        return span;
    }
}