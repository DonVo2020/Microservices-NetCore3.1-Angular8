import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EventService {

  public _setCourse:any;
  public _setCourseData:any;
  private _baseAdminUrl="https://localhost:44370/adminservice";
  private _baseMentorUrl="https://localhost:44370/mentorservice";
  private _baseStudentUrl="https://localhost:44370/studentservice";
  private _baseCourseUrl="https://localhost:44370/courseservice";

  private _eventsUrl = this._baseCourseUrl;
  private _specialEventsUrl = this._baseStudentUrl+"/ListOfCourse/";
  private _specialEventsUrlAddCourse = this._baseStudentUrl;
  private _coursesUrl = this._baseMentorUrl+"/ListOfCourseMentor/";
  private _deleteCourseUrl = this._baseAdminUrl+"/";
  private _addCourseUrl = this._baseAdminUrl;
  private _updateCourseUrl = this._baseAdminUrl+"/";
  private _searchCourseUrl = this._baseCourseUrl+"/search/";
  private _getUserListUrlAdminFetch = this._baseAdminUrl+"/usersList";
  private _getMentorListUrlAdminFetch = this._baseAdminUrl+"/mentorsList";
  private _getMentorListUrl = this._baseAdminUrl;
  private _updateMentorUrl = this._baseMentorUrl+"/mentorProfile/";
  private _updateStudentUrl = this._baseStudentUrl+"/studentProfile/";
  private _updateEnrolledCourseStudentUrl = this._baseStudentUrl+"/ChangeEnrolledCourseStatus/";
  private _updateEnrolledCourseMentorUrl = this._baseMentorUrl+"/ChangeEnrolledCourseStatus/";
  private _mentorProfileUrl = this._baseMentorUrl+"/mentorProfile/";
  private _studentProfileUrl = this._baseStudentUrl+"/studentProfile/";
  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents(StudentEmail) {
    return this.http.get<any>(this._specialEventsUrl+StudentEmail)
  }

  enrollCourse(user) {
    return this.http.post<any>(this._specialEventsUrlAddCourse, user)
  }
  enrolledEvents() {
    return !!localStorage.getItem('EventToken')    
  }
  getCourses(MentorEmail) {
    return this.http.get<any>(this._coursesUrl+MentorEmail)
  }
  deleteCourse(deleteField){
    return this.http.delete<any>(this._deleteCourseUrl+deleteField)
  }

  setCourse(course){
    this._setCourse = course;
    
  }
  getCourse(){
    return this._setCourse;
  }
  
  registerCourses(course) {
    return this.http.post<any>(this._addCourseUrl, course)
  }

  editCourses(editField,course) {
    return this.http.put<any>(this._updateCourseUrl+editField,course)
  }
  
  searchResult(searchField) {
    //const search = {searchItem: searchField};
   // console.log('eventService: ' + JSON.stringify(searchField))
    return this.http.get<any>(this._searchCourseUrl+searchField);
  }

  getusersListAdmin() {
    return this.http.get<any>(this._getUserListUrlAdminFetch)
  }

  getmentorsListAdmin() {
    return this.http.get<any>(this._getMentorListUrlAdminFetch)
  }

  editMentorDetails(mentorId,mentorUpdatedData) {
    console.log('******'+mentorId+'**********'+JSON.stringify(mentorUpdatedData))
    return this.http.put<any>(this._updateMentorUrl+mentorId,mentorUpdatedData)
  }
  editStudentDetails(studentId,studentUpdatedData) {
    console.log('******'+studentId+'**********'+JSON.stringify(studentUpdatedData))
    return this.http.put<any>(this._updateStudentUrl+studentId,studentUpdatedData)
  }
  getMentorListDetails() {
    return this.http.get<any>(this._getMentorListUrl)
  }

  updateEnrolledCourseStudent(updateCourseId,updateCourseUserName,course) {
    return this.http.put<any>(this._updateEnrolledCourseStudentUrl+updateCourseId+'/'+updateCourseUserName,course)
  }
  updateEnrolledCourseMentor(updateCourseId,updateCourseUserName,course) {
    return this.http.put<any>(this._updateEnrolledCourseMentorUrl+updateCourseId+'/'+updateCourseUserName,course)
  }
  getMentorDetails(mentorEmail){
    return this.http.get<any>(this._mentorProfileUrl+mentorEmail)
  }
  getStudentDetails(mentorEmail){
    return this.http.get<any>(this._studentProfileUrl+mentorEmail)
  }
}
