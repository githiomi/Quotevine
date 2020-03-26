import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from './personal-details';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  username = 'daniel_githiomi';
  name = 'Daniel Githiomi';
  quotesPosted = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
