export default class BaseColumn {
    constructor(title, width) {
        if (this.constructor === BaseColumn) {
            throw new TypeError("Can not construct abstract class.");
        }

        this.title = title;
        this.width = width;
    }

    getElement(dataObject) {
        throw new Error('You have to implement the method \'getElement\'.');
    }
}