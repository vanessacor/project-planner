import http from "./httpClient";

class ApiClient {
  static getAllProjects() {
    return http.get("/projects");
  }
  static getProjectById(id) {
    return http.get(`/projects/${id}`);
  }
  static deleteProject(id) {
    return http.delete(`/projects/${id}`);
  }
  static toggleStatus(id, data) {
    return http.patch(`/projects/${id}`, data);
  }
  static createProject(data) {
    return http.post("/projects", data);
  }
  static updateProject(id, data) {
    console.log(data.complete);
    return http.put(`/projects/${id}`, data);
  }
}

export default ApiClient;
