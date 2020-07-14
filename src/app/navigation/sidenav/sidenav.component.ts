import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  @Output()
  sideNavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sideNavToggle.emit();
  }

}
