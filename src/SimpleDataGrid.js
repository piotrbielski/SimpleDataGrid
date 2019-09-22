import Command from './Command';
import ValueColumn from './ValueColumn';
import CommandColumn from './CommandColumn';
import AddressHelper from './AddressHelper';
import GridBuilder from './GridBuilder';

class Grid {
    constructor(divId, pageSize, columns) {
        this._divId = divId;
        this._pageSize = pageSize;
        this._columns = columns;

        this._page = 1;
        this._pureDataSourceAddress = '';
        this._urlData = {
            startRange: this.startRange,
            endRange: this.endRange
        };
    }

    get startRange() {
        return this.endRange - this._pageSize;
    }

    get endRange() {
        return this._page * this._pageSize;
    }

    createGrid(data, count) {
        const gridBuilder = new GridBuilder(this._divId);
        
        gridBuilder.buildHeader(this._columns);
        gridBuilder.buildBody(false, this._columns, data);
        gridBuilder.buildFooter(count, this._pageSize);
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

                this.createGrid(result.data, result.count);
            }
            catch(exception) {
                console.error(`SimpleDataGrid exception: ${exception}`);
            }

        });
    }
}

export { Command, ValueColumn, CommandColumn, Grid }