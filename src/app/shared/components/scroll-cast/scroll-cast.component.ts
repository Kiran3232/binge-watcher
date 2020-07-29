import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-cast',
  templateUrl: './scroll-cast.component.html',
  styleUrls: ['./scroll-cast.component.css']
})
export class ScrollCastComponent implements OnInit {

  @Input()
  credits: any;

  @Input()
  type: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showCast() {
    this.router.navigate([this.type, this.credits.id, 'credits']);
  }

}
