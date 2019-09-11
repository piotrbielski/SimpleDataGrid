export default class AddressHelper {
    static AddDataToAddress(pureAddress, data) {
        pureAddress += "?";

        let first = true;
        for (const prop in data) {
            if (!first)
                pureAddress += '&';

            pureAddress += `${prop}=${data[prop]}`;
        }

        return pureAddress;
    }
}