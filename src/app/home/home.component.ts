import { Component, OnInit } from '@angular/core';
import { CakeproService } from '../services/cakepro.service';
import { Cakeobj } from '../model/cake';
import { Router } from '@angular/router';
import { LoginservicesService } from '../login-service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cakedata: Cakeobj[] = [];
  search: string = ''
  constructor(private cakeserv: CakeproService, private router: Router, public logserv: LoginservicesService) { }

  ngOnInit(): void {
    this.getentirecake();
  }

  getentirecake(): void {
    this.cakeserv.getCakeobj().subscribe(entirecakes => {
      this.cakedata = entirecakes;
    });
  }

  deleteCake(id: any): void {
    this.cakeserv.deletecakedetails(id).subscribe(data => {
      alert('Cake Deleted Successfully ' + data.id);
      this.router.navigateByUrl('viewallcakes');
    });

  }
  searchBar() {
    this.cakedata = this.cakedata.filter((item) => {
      return item.name?.toLowerCase().startsWith(this.search.toLowerCase());
    })
  }
}
