export default class BaseDataLoader {
    constructor(elementToLoad) {
        if (this.constructor == BaseDataLoader) {
            throw new TypeError("Can not construct abstract class.");
        }

        this._elementToLoad = elementToLoad;
    }

    loadData(responsePromise) {
        throw new Error('You have to implement the method \'loadData\'.');
    }
}