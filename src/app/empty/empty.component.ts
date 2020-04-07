import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  constructor(public router:Router) {this.router.navigate(["home"]) }

  ngOnInit(): void {
  }

}
