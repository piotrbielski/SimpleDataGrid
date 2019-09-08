import Column from './Column';
import Command from './Command';

export default class CommandColumn extends Column {
    constructor(title, width, commands) {
        super(title, width);

        if (!Array.isArray(commands) || !commands.every(x => x instanceof Command))
            throw 'commands argument must be an array and contain only Command types';

        this.commands = commands;
    }
}