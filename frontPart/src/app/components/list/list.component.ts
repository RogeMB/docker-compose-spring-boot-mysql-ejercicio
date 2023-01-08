import { Component, OnInit } from '@angular/core';
import { TutorialsReponse } from 'src/app/interfaces/tutorials.interface';
import { TutorialService } from 'src/app/services/tutorial.service';
import { Tutorial } from '../dto/tutorial.dto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listado: TutorialsReponse[] = [];
  published: boolean = false;
  tutorial = new Tutorial();

  constructor(private tutorialServ: TutorialService) { }

  ngOnInit(): void {
    this.refreshTutorial();

  }

  refreshTutorial() {
    this.tutorialServ.getTutorials().subscribe((resp) => {
      this.listado = resp;
      console.log(this.listado);
    });
  }


  createTutorial() {
    this.tutorialServ.createTutorial(this.tutorial).subscribe(resp =>{
      console.log(resp)
      this.refreshTutorial();
    });

  }

}
