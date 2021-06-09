import http from "./httpClient";

class ApiClient {
  static getAllProjects() {
    return http.get("/projects");
  }
  static getProject(id) {
    return http.get(`/projects/${id}`);
  }
  static getProject(id) {
    return http.get(`/projects/${id}`);
  }

  static createProject(project) {
    return http.post("/projects/", project);
  }

  static deleteProject(id) {
    return http.delete(`/projects/${id}`);
  }
  static updateProject(project) {
    return http.put(`/projects/${project.id}`, project);
  }
}

export default ApiClient;
