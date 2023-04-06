const deepcopy = (x) => 
        JSON.parse(JSON.stringify(x))

export class GradeSchool {
  constructor() {
    this.dbSchool = {};
  }
  roster() {
    return deepcopy(this.dbSchool)
  }
  /**
   * Add student to specific grade
   * 
   * @param {string} name
   * @param {number} grade
   * 
   */
  add(name, grade) {
    for (let key in this.dbSchool) {
      let s = this.dbSchool[key].indexOf(name);
      if ( s > -1 ) {
        this.dbSchool[key].splice(s, 1);
      }
    }

    if (!this.dbSchool[grade]) {
      this.dbSchool[grade] = [name];
    } else {
      this.dbSchool[grade].push(name);
      this.dbSchool[grade].sort();
    }    
    
  }
  /**
   * Get a sorted list of student by grade order
   * 
   * @param {number} gradeNum
   * @returns {string[]}
   */
  grade(gradeNum) {
    return deepcopy(this.dbSchool[gradeNum] || [])
    }
}
