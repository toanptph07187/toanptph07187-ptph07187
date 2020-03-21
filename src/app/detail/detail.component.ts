import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../Product';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }
  @Input('data') product : Product;
  ngOnInit() {
  }

}