import { Injectable } from '@angular/core';
import { Budget } from '../model/budget';
import { BUDGET } from '../model/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // projectList : Budget = new Budget();
  // dataStorage: Array<String>;

  // constructor() { }

  // retrieve the list of project from the budget
  getProjects(): Budget[] {
    return BUDGET;
  }

  dataStorage = JSON.parse(window.localStorage.getItem('capex'));

  if(dataStorage = ! null) {
    this.dataStorage = JSON.parse(this.dataStorage);
  }
  // retrieve the individual project
  getProject(id: number): Budget {
    let projects: Budget[] = this.getProjects();
    let project: Budget = projects.find(p => { return (p.budgetId === id) });
    return Object.assign({}, project);
    // return project;
  }

  // add a project to the budget
  addProject(): Budget{
    let projects: Budget[] = this.getProjects();
    let maxId: number;
    if(projects && projects.length > 0){
      maxId = projects[projects.length - 1].budgetId;
    }
    else{
      maxId = 0;
    }

    let project: Budget = new Budget();
    project.budgetId = maxId +1;
    projects.push(project);
    this.saveLocalStorage();
    return project;
  }

  // add a project to the budget
  // addProject(project: Budget): void {
  //   let projects: Budget[] = this.getProjects();
  //   let target: Budget = projects.find(p => { return (p.budgetId == project.budgetId) });
  //   if (!target) {
  //     projects.push(project);
  //   }
  //   else {
  //     Object.assign(target, project);
  //   }
  //   this.saveLocalStorage();
  // }

  // Save information in a local storage.
  saveLocalStorage() {
    window.localStorage.setItem("capex", JSON.stringify(this.dataStorage));
  }

  // remove a project from the budget
  removeProject(id: number) {
    let project: Budget[] = this.getProjects();
    for (let i = 0; i < project.length; i++) {
      if (project[0].budgetId == id) {
        project.splice(i, 1);
        break;
      }
    }
    return project;
  }

  calculateRemaining() {
    let project: Budget;
    let remainingBalance = project.budgetAmount - project.actualSpending
    return remainingBalance;
  }
}
