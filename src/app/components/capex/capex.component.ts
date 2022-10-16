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
  constructor(private provider: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.provider.getProjects();
  }

}
