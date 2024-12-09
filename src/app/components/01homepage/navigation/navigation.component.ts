import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  countries = ["USD","UK","IND","UAE","US"]
  lang = ["English","Hindi","Spanish","Arabi"]

}
