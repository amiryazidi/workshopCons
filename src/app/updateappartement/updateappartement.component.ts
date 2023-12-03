import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from '../Core/Models/apartment';
import { AppartementService } from '../service/appartement.service';

@Component({
  selector: 'app-updateappartement',
  templateUrl: './updateappartement.component.html',
  styleUrls: ['./updateappartement.component.css'],
})
export class UpdateappartementComponent {
  apartForm!: FormGroup;
  id!: number;
  appartement!: Apartment;
  constructor(
    private actR: ActivatedRoute,
    private service: AppartementService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.id = this.actR.snapshot.params['id'];
    this.service.fetchappartementById(this.id).subscribe((d) => {
      this.appartement = d;
      this.apartForm.patchValue(this.appartement);
    });
    this.apartForm = new FormGroup({
      apartNum: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      floorNum: new FormControl('', Validators.required),
      surface: new FormControl('', Validators.required),
      terrace: new FormControl('', Validators.required),
      surfaceTerrace: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      residence: new FormControl(this.id, Validators.required),
    });
  }
  get apartNum() {
    return this.apartForm.get('apartNum');
  }
  get floorNum() {
    return this.apartForm.get('floorNum');
  }
  get surface() {
    return this.apartForm.get('surface');
  }
  get surfaceTerrace() {
    return this.apartForm.get('surfaceTerrace');
  }
  get terrace() {
    return this.apartForm.get('terrace');
  }
  get category() {
    return this.apartForm.get('category');
  }
  get description() {
    return this.apartForm.get('description');
  }
  get residence() {
    return this.apartForm.get('residence');
  }
  save() {
    this.service
      .updateAppartement(this.apartForm.value,this.id)
      .subscribe(() => {
        this.router.navigate(['/residences']);
        console.log('Appartement updated');
      });
  }
}
