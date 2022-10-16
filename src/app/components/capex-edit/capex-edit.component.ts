import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Budget } from 'src/app/model/budget';
import{ProjectService} from 'src/app/services/project.service'

@Component({
  selector: 'app-capex-edit',
  templateUrl: './capex-edit.component.html',
  styleUrls: ['./capex-edit.component.css']
})
export class CapexEditComponent implements OnInit {

  project!: Budget;
	// project: Budget = new Budget;
	title!: string;

  constructor(private route: ActivatedRoute,
  		private provider: ProjectService) { }

  ngOnInit() {
  	
  	let id = this.route.snapshot.params['id'];
    if (id) {
        this.title = 'Edit Contact';
        this.project = this.provider.getProject(id);
    } 
    else{
    	this.title = "Add Contact";
      this.saveProject();
		}
		console.log(this.project);
  }

  saveProject() {
    this.project = this.provider.addProject();
    this.title = 'Edit Project';
    localStorage.setItem('Save_project', JSON.stringify('budget.json'));
    // this.router.navigate(['', this.project.budgetId])
  }

}
