
export default class Command {
    constructor(buttonText, objectField, isHyperlink, afterExecuteCallback) {
        this.buttonText = buttonText;
        this.objectField = objectField;
        this.isHyperlink = isHyperlink;
        this.afterExecuteCallback = afterExecuteCallback;
    }
}