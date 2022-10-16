import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Budget } from 'src/app/model/budget';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-capex-remove',
  templateUrl: './capex-remove.component.html',
  styleUrls: ['./capex-remove.component.css']
})
export class CapexRemoveComponent implements OnInit {

  project: Budget;
	title:  string;

  constructor(private route: ActivatedRoute,
    private provider: ProjectService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if(id){
      // this.title = 'Remove Contact';
      this.removeProject(id);
      console.log(this.project);
    }
  }

  removeProject(id:number){

    if(confirm("Are you sure to delete "+ this.project.budgetId)) {
      this.provider.removeProject(id);
    }
  }
}
