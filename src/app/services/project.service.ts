import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from '../model/budget';
import { BUDGET } from '../model/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // define variables in the class project service 
  project: Budget = new Budget();
  localStorage: any;
  dataStorage: any;

  // class constructor
  constructor(private http: HttpClient) {
    this.localStorage = window.localStorage.getItem("capex");
  }

  // retrieve the list of project from the budget
  getProjects(): Budget[] {
    return BUDGET;
  }

  // retrieve the individual project
  getProject(id: number): Budget {
    let projects: Budget[] = this.getProjects();
    let project: Budget = projects.find(p => { return (p.budgetId === id) });
    return Object.assign({}, project);
    // return project;
  }

  // add a project to the budget
  addProject(): Budget {
    let projects: Budget[] = this.getProjects();
    let maxId: number;
    if (projects && projects.length > 0) {
      maxId = projects[projects.length - 1].budgetId;
    }
    else {
      maxId = 0;
    }

    this.project.budgetId = maxId + 1;
    projects.push(this.project);
    this.saveLocalStorage(projects);
    return this.project;
  }

  // load local storage method
  loadLocal() {
    this.localStorage;
    console.log(this.localStorage);
  }

  // Save information in a local storage.
  saveLocalStorage(projects) {
    this.localStorage = window.localStorage.setItem("capex", JSON.stringify(projects, this.dataStorage));
  }

}
