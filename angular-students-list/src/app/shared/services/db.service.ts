import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { moreInfoOn, eachMoreInfo } from '../utils';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) { }

  fetchDoc(collection: string, id: string, docId?: string): Observable<any> {
    return this.afs.collection(collection).doc(id).valueChanges()
    .pipe(
      map(doc => ({...doc, id, docId}))
    );
  }

  fetchCollection(collection: string, query?): Observable<any[]> {
    return this.afs.collection(collection, query).snapshotChanges().pipe(
      map(snapshots => snapshots.map(snap => ({
        ...snap.payload.doc.data(),
        id: snap.payload.doc.id
      })))
    );
  }

  fetchUser(id: string) {
    return this.fetchDoc('users', id);
  }

  fetchGroup(id: string) {
    return this.fetchDoc('groups', id);
  }

  fetchSubject(id: string) {
    return this.fetchDoc('subjects', id);
  }

  fetchTeacher(id: string) {
    return this.fetchDoc('teachers', id);
  }

  fetchTeachers() {
    return this.fetchCollection('users', ref => ref.where('roles.teacher', '==', true)
     );
  }

  fetchCourse(id: string) {
    return this.fetchDoc('courses', id);
  }

  fetchCourseWithInfo(courseId: string) {
    return this.fetchCourse(courseId).pipe(
      moreInfoOn({
        group: id => this.fetchGroup(id),
        subject: id => this.fetchSubject(id),
        teacher: id => this.fetchTeacher(id),
      })
    );
  }

  fetchGroups() {
    return this.fetchCollection('groups');
  }

  fetchCoursesByTeacher(teacherId: string) {
    return this.fetchCollection('courses', ref => ref.where('teacher', '==', teacherId)).pipe(
      eachMoreInfo({
        group: id => this.fetchGroup(id),
        subject: id => this.fetchSubject(id),
        teacher: id => this.fetchTeacher(id),
      })
    );
  }

  fetchCourses() {
    return this.fetchCollection('courses');
  }

  fetchCoursesWithInfo() {
    return this.fetchCourses().pipe(
      eachMoreInfo({
        group: id => this.fetchGroup(id),
        subject: id => this.fetchSubject(id),
        teacher: id => this.fetchTeacher(id),
      })
    );
  }

  fetchCoursesBySubject(id) {
    return this.fetchCollection('courses', ref => ref.where('subject', '==', id));
  }

  fetchPerformanceByGroups(subjectId) {
    return this.fetchCoursesBySubject(subjectId).pipe(
      eachMoreInfo({
        group: group => this.fetchGroup(group),
        id: courseId => this.fetchCourseMarks(courseId)
      })
    );
  }

  fetchAnnouncements() {
    return this.fetchCollection('announcements');
  }

  fetchAnnouncementsWithPublisher() {
    return this.fetchAnnouncements().pipe(
      eachMoreInfo({
        publisher: id => this.fetchUser(id)
      })
    );
  }

  fetchStudent(id: string) {
    return this.fetchDoc('students', id);
  }

  fetchGroupStudents(id: string) {
    return this.fetchCollection('students', ref => ref.where('group', '==', id));
  }

  fetchStudentMarks(studentId: string) {
    return this.fetchCollection('performance', ref => ref.where('student', '==', studentId))
    .pipe(
      eachMoreInfo({
        subject: subjectId => this.fetchDoc('subjects', subjectId)
      })
    );
  }

  fetchStudents() {
    return this.fetchCollection('students').pipe(
      map(students => students.map(student => {
        return this.studentFromDatabase(student);
      })),
      eachMoreInfo({
        group: groupId => this.fetchGroup(groupId)
      })
    );
  }

  fetchSubjects() {
    return this.fetchCollection('subjects');
  }

  studentFromDatabase(student) {
    return {
      ...student,
      birthdate: new Date(student.birthdate)
    };
  }

  studentToDB(student) {
    return {
      ...student,
      group: student.group.id,
      birthdate: student.birthdate.toISOString()
    };
  }

  addStudent(student) {
    return this.afs.collection('students').add(this.studentToDB(student));
  }

  addCourse(course) {
    return this.afs.collection('courses').add(course);
  }

  addAnnouncement(adv) {
    return this.afs.collection('announcements').add(adv);
  }

  deleteStudent(id) {
    this.afs.doc(`students/${id}`).delete();
  }

  fetchCourseMarks(courseId: string): Observable<any> {
    return this.fetchCourse(courseId).pipe(
      map(course => course.group),
      switchMap(groupId => this.fetchGroupStudents(groupId)),
      eachMoreInfo({
        id: studentId => this.fetchPerformance(courseId, studentId)
      })
    );
  }

  fetchPerformance(courseId, studentId) {
    return this.fetchDoc('performance', `${courseId}_${studentId}`, studentId);
  }

  setStudentMark(student, courseInfo) {
    this.afs.collection('performance').doc(student.id.id).set({
      student: student.id.docId,
      course: courseInfo.id,
      subject: courseInfo.subject.id,
      mark: student.mark || student.id.mark || '',
      attendance: student.attendance || student.id.attendance || ''
    });
  }

  getAdvertisementPublisher(uid) {
    return this.afs.doc(`users/${uid}`).valueChanges();
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  updateStudent(id, selectedStudent): Promise<void> {
    return this.afs.doc(`students/${id}`)
    .update(this.studentToDB(selectedStudent));
  }
}
