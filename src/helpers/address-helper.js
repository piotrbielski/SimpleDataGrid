export default class AddressHelper {
    static AddDataToAddress(pureAddress, data) {
        pureAddress += "?";

        let first = true;
        for (let prop in data) {
            if (!first)
                pureAddress += '&';

            pureAddress += `${prop}=${data[prop]}`;
            first = false;
        }

        return pureAddress;
    }
}