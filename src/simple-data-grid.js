import Command from './columns/command';
import ValueColumn from './columns/value-column';
import CommandColumn from './columns/command-column';
import AddressHelper from './helpers/address-helper';
import BaseGridBuilder from './builders/base-grid-builder';
import DefaultGridBuilder from './builders/default-grid-builder';

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
            this._gridBuilder = new DefaultGridBuilder(divId, pageSize, columns);
        }
    }

    get startRange() {
        return this.endRange - this._pageSize;
    }

    get endRange() {
        return this._page * this._pageSize;
    }

    _createGrid(responsePromise) {        
        this._gridBuilder.buildHeader();
        this._gridBuilder.buildBody(false, responsePromise);
        this._gridBuilder.buildFooter(async (page) => await this._loadForPage(page));
    }

    _rebuildBodyGrid(responsePromise) {
        this._gridBuilder.buildBody(true, responsePromise);
    }

    async _loadForPage(page) {
        this._page = page;
        this._urlData.startRange = this.startRange;
        this._urlData.endRange = this.endRange;

        const address = AddressHelper.AddDataToAddress(this._pureDataSourceAddress, this._urlData);
        try {
            const responsePromise = fetch(address);
            this._rebuildBodyGrid(responsePromise);
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
                const responsePromise = fetch(address);

                this._createGrid(responsePromise);
            }
            catch(exception) {
                console.error(`SimpleDataGrid exception: ${exception}`);
            }

        });
    }
}

export { Command, ValueColumn, CommandColumn, DefaultGridBuilder }