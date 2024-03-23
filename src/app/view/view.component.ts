import { Component, OnInit } from '@angular/core';
import { Cakeobj } from '../model/cake';
import { ActivatedRoute } from '@angular/router';
import { CakeproService } from '../services/cakepro.service';
import { LoginservicesService } from '../login-service/login.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  constructor(private rs: ActivatedRoute, private cakeservs: CakeproService, public logserv: LoginservicesService) {

  }
  mycakes: Cakeobj = {}
  ngOnInit(): void {
    this.rs.paramMap.subscribe(params => {
      let cakeid = params.get("id") ?? 0;
      this.getOneCake(cakeid);
    })
  }

  getOneCake(id: any) {
    this.cakeservs.getCakeobjById(id).subscribe((data) => {
      this.mycakes = data;
    })
  }


}