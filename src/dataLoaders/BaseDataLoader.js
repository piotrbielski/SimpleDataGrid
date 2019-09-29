export default class BaseDataLoader {
    constructor(elementIdToLoad) {
        if (this.constructor == BaseDataLoader) {
            throw new TypeError("Can not construct abstract class.");
        }

        this._elementToLoad = document.getElementById(elementIdToLoad);
    }

    loadData(responsePromise) {
        throw new Error('You have to implement the method \'loadData\'.');
    }
}