import Column from './Column';

export default class ValueColumn extends Column {
    constructor(title, objectField, width) {
        super(title, width);

        this.objectField = objectField;
    }
}