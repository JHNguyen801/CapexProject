import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Budget } from 'src/app/model/budget';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-capex-entry',
  templateUrl: './capex-entry.component.html',
  styleUrls: ['./capex-entry.component.css']
})
export class CapexEntryComponent implements OnInit {

  project: Budget;
  sub: any;
  totalProjects: number;

  constructor(private route: ActivatedRoute,
    private provider: ProjectService) { }

  ngOnInit(): void {
    this.totalProjects = this.provider.getProjects().length;

    this.sub = 
    this.route.params.subscribe(params => {
      console.log(params);
      let id: string = params['id'];
      this.project = this.provider.getProject(+id);
    });
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.sub.unsubscribe();
  }
}
