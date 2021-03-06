import { Component, OnInit } from '@angular/core';
import EncountersService from '../services/encounters.service';
import { newEncounter, Encounter} from '../models';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersService]
})
export class EncountersComponent implements OnInit {

  encounter: newEncounter;
  marsEncounter: Encounter[];

  constructor( private encounterService: EncountersService) {
    encounterService.getEncounters().subscribe((encounter) => {
      this.marsEncounter = encounter.splice(0,100);
    }, (err) => {
      console.log(err);
    });
   }
  ngOnInit() {
  }
}
