import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/model/budget';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-capex',
  templateUrl: './capex.component.html',
  styleUrls: ['./capex.component.css']
})
export class CapexComponent implements OnInit {

  projects: Budget[];
  defaultStorage: Budget[];
  localStorage: any;
  dataItems: any;
  term: any;

  constructor(private provider: ProjectService) { 
    this.defaultStorage = this.provider.getProjects();
    this.localStorage = this.provider.loadLocal();
  }

  ngOnInit(): void {
    if(this.localStorage !== null){
      this.projects = this.defaultStorage;
      console.log(this.projects);
    }
    else{
      this.projects = this.localStorage;
      console.log(this.projects);
    }
  }

}
