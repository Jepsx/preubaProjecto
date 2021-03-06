import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pocket } from '../models/pocket.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  private pocketSub: Subscription;
  pockets: Pocket[]=[];
  valGen=0;
  valNom=0;
  valVia=0;

  constructor(private authService:AuthService) {
    this.authService.getPocketsValues()
    this.pocketSub = this.authService.getPocketsUpdateListener().subscribe((pockets:Pocket[])=>{
      this.pockets = pockets
      this.setValues()
    })
  }

  ngOnInit(): void {
    this.authService.getPocketsValues()
    this.pocketSub = this.authService.getPocketsUpdateListener().subscribe((pockets:Pocket[])=>{
      this.pockets = pockets
      this.setValues()
    })

  }

  setValues(){
    this.valGen= Number(this.pockets[0].saldo)
    this.valVia= Number(this.pockets[1].saldo)
    this.valNom= Number(this.pockets[2].saldo)
  }

  testData=[

    {name: "General", value: 45000000},
    {name: "Nómina", value: 5000000},
    {name: "Viáticos", value: 4000000},

    ];



}
