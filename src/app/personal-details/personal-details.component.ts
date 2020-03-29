import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  username = 'daniel_githiomi';
  name = 'Daniel Githiomi'; 

  constructor() { }

  ngOnInit(): void {
  }

}
