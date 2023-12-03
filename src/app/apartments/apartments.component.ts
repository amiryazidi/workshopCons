import { Component } from '@angular/core';
import { Residence } from '../Core/Models/residence';
import { Apartment } from '../Core/Models/apartment';
import { ActivatedRoute } from '@angular/router';
import { AppartementService } from '../service/appartement.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria","image":"../../assets/images/R1.jpeg" },
    {id:2,"name": "El yasmine","address":"Ezzahra","image":"../../assets/images/R2.jpg" },
    {id:3,"name": "El Arij","address":"Rades","image":"../../assets/images/R3.jpg" },
    {id:4,"name": "El Anber","address":"Manzah 5","image":"../../assets/images/R4.jpg" }
  ];


  idResidence!:number;
  list!:Apartment[];
  likedApartments:Apartment[]=[];
  searchApart!:number;
  constructor(private actR:ActivatedRoute,private appartementService:AppartementService) { }

  ngOnInit(): void {
    this.idResidence =Number(this.actR.snapshot.paramMap.get('id'));
   // this.list = this.listApartments.filter((appart:Apartment)=>appart.residence.id==this.idResidence);
    this.appartementService.getAppartement().subscribe(
      (res:any)=>{
        this.list=res.filter((appart:Apartment)=>appart.residence.id==this.idResidence);
        console.log(this.list);
      }
    )
  }

  deleteAppart(id:number){
    this.appartementService.deleteAppartement(id).subscribe({
      next:() =>this.list=this.list.filter((a)=>a.id!=id)
    })
  }

  likeApartment(id:number){
      this.likedApartments.push(this.list[id]);
      console.log(this.likedApartments);
    }
}
