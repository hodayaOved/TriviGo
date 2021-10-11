import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-system-comments',
  templateUrl: './system-comments.component.html',
  styleUrls: ['./system-comments.component.scss']
})
export class SystemCommentsComponent implements OnInit {

  constructor(private navbar:NavbarService,private router: Router) { }

  ngOnInit(): void {
  }

}
