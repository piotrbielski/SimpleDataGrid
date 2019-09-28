import Command from './columns/Command';
import ValueColumn from './columns/ValueColumn';
import CommandColumn from './columns/CommandColumn';
import AddressHelper from './helpers/AddressHelper';
import BaseGridBuilder from './builders/BaseGridBuilder';
import DefaultGridBuilder from './builders/DefaultGridBuilder';

export class Grid {
    constructor(divId, pageSize, columns, gridBuilder) {
        this._divId = divId;
        this._pageSize = pageSize;
        this._columns = columns;

        this._page = 1;
        this._pureDataSourceAddress = '';
        this._urlData = {
            startRange: this.startRange,
            endRange: this.endRange
        };

        if (gridBuilder && !(gridBuilder instanceof BaseGridBuilder)) {
            throw new TypeError('The gridBuilder parameter must be an instance of the BaseGridBuilder.');
        }
        else if (gridBuilder) {
            this._gridBuilder = gridBuilder;
        }
        else {
            this._gridBuilder = new DefaultGridBuilder(divId);
        }
    }

    get startRange() {
        return this.endRange - this._pageSize;
    }

    get endRange() {
        return this._page * this._pageSize;
    }

    _createGrid(data, count) {        
        this._gridBuilder.buildHeader(this._columns);
        this._gridBuilder.buildBody(false, this._columns, data);
        this._gridBuilder.buildFooter(count, this._pageSize, async (page) => await this._loadForPage(page));
    }

    _rebuildBodyGrid(data, count) {
        this._gridBuilder.buildBody(true, this._columns, data);
    }

    async _loadForPage(page) {
        this._page = page;
        this._urlData.startRange = this.startRange;
        this._urlData.endRange = this.endRange;

        const address = AddressHelper.AddDataToAddress(this._pureDataSourceAddress, this._urlData);
        try {
            const response = await fetch(address);
            const result = await response.json();

            this._rebuildBodyGrid(result.data, result.count);
        }
        catch(exception) {
            console.error(`SimpleDataGrid exception: ${exception}`);
        }
    }

    init(pureDataSourceAddress, additionalData) {
        this._pureDataSourceAddress = pureDataSourceAddress;

        if (additionalData != null && additionalData != undefined) {
            for (const prop in additionalData) {
                this._urlData[prop] = additionalData[prop];
            }
        }

        document.addEventListener('DOMContentLoaded', async () => {            
            try {
                const address = AddressHelper.AddDataToAddress(this._pureDataSourceAddress, this._urlData);

                const response = await fetch(address);
                const result = await response.json();

                this._createGrid(result.data, result.count);
            }
            catch(exception) {
                console.error(`SimpleDataGrid exception: ${exception}`);
            }

        });
    }
}

export { Command, ValueColumn, CommandColumn, DefaultGridBuilder }