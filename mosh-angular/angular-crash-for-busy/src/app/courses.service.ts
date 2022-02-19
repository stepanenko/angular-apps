
export class CoursesService {
  courses = ['course1', 'couse2', 'course3'];

  getCourses() {
    return this.courses;
  }

  delete(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  add() {
    const newCourse = 'course4';
    this.courses.push(newCourse);
  }
}
