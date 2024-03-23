import { Component, OnInit } from '@angular/core';
import { Cakeobj } from '../model/cake';
import { CakeproService } from '../services/cakepro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcakes',
  templateUrl: './cakes.component.html',
  styleUrl: './cakes.component.css'
})
export class AddcakesComponent implements OnInit {
  mycakes: Cakeobj = {}
  isEditCake: boolean = false;
  constructor(private cakesserv: CakeproService, private roter: Router, private rs: ActivatedRoute) { }

  addNewCake() {
    if (this.isEditCake) {
      this.cakesserv.editcakedetails(this.mycakes).subscribe((data) => {
        alert("Cake Edited Successfully" + data.id)
        this.roter.navigateByUrl("viewallcakes")
      })
    }
    else {
      this.cakesserv.addcakedetails(this.mycakes).subscribe((data) => {
        alert("Cake Added Successfully " + data.id)
        this.roter.navigateByUrl("viewallcakes")
      })
    }
  }
  ngOnInit(): void {
    this.rs.paramMap.subscribe(params => {
      let cakeid = params.get("id") ?? 0;
      this.getOneCake(cakeid);

    })
  }

  getOneCake(id: any) {
    this.cakesserv.getCakeobjById(id).subscribe((data) => {
      this.mycakes = data;
      this.isEditCake = true
    })
  }
}