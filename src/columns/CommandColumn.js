import BaseColumn from './BaseColumn';
import Command from './Command';

export default class CommandColumn extends BaseColumn {
    constructor(title, width, commands) {
        super(title, width);

        if (!Array.isArray(commands) || !commands.every(x => x instanceof Command))
            throw new Error('The \'commands\' argument must be an array and contain only Command types.');

        this.commands = commands;
    }

    getElement(dataObject) {
        const span = document.createElement('span');

        this.commands.forEach(command => {
            const button = document.createElement('button');
            button.innerText = command.buttonText;

            if (command.isHyperlink) {
                button.addEventListener('click', () => {
                    document.location.href = dataObject[command.objectField];
                });
            }
            else {
                button.addEventListener('click', async () => {
                    const response = await fetch(dataObject[command.objectField]);

                    if (response != null)
                        command.afterExecuteCallback(response);
                });
            }

            span.appendChild(button);
        });

        return span;
    }
}