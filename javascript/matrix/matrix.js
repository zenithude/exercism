//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(stringMatrix=""){        
    this.matrix = stringMatrix.split('\n').map((row) => {
      return row.split(' ').map((num) => {
        return parseInt(num);
      });
    });
  }
  get rows() {
    return this.matrix;
  }
  get columns() {
    const rows = this.rows;
    const resolve = [];
    for (let i = 0; i < rows[0].length; i++) {
      const column = [];
      for (let j = 0; j < rows.length; j++) {
        column.push(rows[j][i]);
      }
      resolve.push(column);
    }
    return resolve;
  }
}
