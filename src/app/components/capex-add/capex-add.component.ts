import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from 'src/app/model/budget';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-capex-add',
  templateUrl: './capex-add.component.html',
  styleUrls: ['./capex-add.component.css'],
  providers: [ProjectService]
})
export class CapexAddComponent implements OnInit {

  project: Budget;
  title: string;

  constructor(private route: ActivatedRoute, private router: Router,
    private provider: ProjectService) { }

  ngOnInit(): void {
    let budgetid = this.route.snapshot.params['id'];
    if (budgetid) {
      this.title = 'Edit Project';
      this.project = this.provider.getProject(budgetid);
    }
    else {
      this.title = "Request Capex";
      this.saveProject();
    }
    console.log(this.project);
  }

  saveProject() {
    this.project = this.provider.addProject();
    this.title = 'Edit Project';
    localStorage.setItem('Save_project',JSON.stringify('budget.json'));
    // this.router.navigate(['', this.project.budgetId])
  }

  // saveProject() {
  //   if (this.isComplete())
  //     this.project = this.provider.addProject();
  //   this.title = 'Edit Project';
  //   localStorage.setItem('Save_project',JSON.stringify('budget.json'));
  // }

  // isComplete() {
  //   let p: Budget = this.project;
  //   if (p.budgetId > 0 &&
  //     p.projectName && p.projectName.length > 0 &&
  //     p.budgetYear && p.budgetYear.length > 0 &&
  //     p.budgetAmount >= 0 &&
  //     p.assetClass && p.assetClass.length > 0 &&
  //     p.department && p.department.length > 0 &&
  //     p.businessJustification && p.businessJustification.length > 0 &&
  //     p.requestor && p.requestor.length > 0 &&
  //     p.status && p.status.length > 0 &&
  //     p.actualSpending >= 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
