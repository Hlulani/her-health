
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrong-quastionnare',
  templateUrl: './wrong-quastionnare.component.html',
  styleUrls: ['./wrong-quastionnare.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrongQuastionnareComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNextScreen() {
    this.router.navigate(['/wrong']);
  }
  
}
