import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  readExcel(){

    let file = "src/app/data/steam.csv";

    var workBook = XLSX.read(file);
    var sheetNames = workBook.SheetNames;
    XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
    console.log()
  }

}
