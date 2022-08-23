import * as fs from 'fs';

const delimiter = ",";

function createColumns(columns: String[]) {
    columns.join(delimiter);
}

function readCsvFile() {
    fs.readFile("a", (err) => {

    })
}

function writeCsvFile() {
    
}

function serializeObject(obj: Object) : void {
    var keys: string[] = Object.keys(obj);
    var values: string[] = Object.values(obj); 


}