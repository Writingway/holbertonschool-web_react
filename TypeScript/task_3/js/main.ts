// Triple slash that include crud.d.ts
/// <reference path="./crud.d.ts" />

import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

//Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};  

//Update the row with the newRowID and the updateRow.
CRUD.updateRow(newRowID, updateRow);

//Delete the row with the newRowID.
CRUD.deleteRow(newRowID);