import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Movement } from 'src/app/interfaces/movements';
import { MovementsService } from 'src/app/services/movements.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isExpense: boolean = true;
  currentDate: string = new Date().toISOString();

  movementForm = this.formBuilder.group({
    amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    notes: ['', Validators.required],
    date: this.currentDate
  })


  constructor(
    private formBuilder: FormBuilder,
    private movementsService: MovementsService,
    private toastController: ToastController
  ) {}


  public doToggle(isExpense: boolean):void{
    this.isExpense = isExpense;
  }

  async submitForm(){

    if(!this.movementForm.get('amount')?.value  ){
      this.presentToast('Ingresa un numero valido', true);
      return;
    } else if(!this.movementForm.get('notes')?.value ){
      this.presentToast('Ingresa notas para esta transaccion', true);
      return;
    } 
    
    // CREACION DE OBJETO TOMANDO VALORES DEL FORMULARIO 
    let newMovement: Movement = {
      id: Date.now(),
      amount: parseFloat(this.movementForm.get('amount')?.value!),
      notes: this.movementForm.get('notes')?.value!,
      isExpense: this.isExpense,
      date: this.movementForm.get('date')?.value!
    }
    
    try {
      // ALMACENANDO OBJETO
      this.movementsService.storeMovement(newMovement)
      // ESTABLECIENDO EL FORMULARIO A SUS VALORES INICIALES
      this.movementForm.controls['amount'].setValue(null);
      this.movementForm.controls['notes'].setValue('');
      this.movementForm.controls['date'].setValue(this.currentDate);
      // MENSAJE DE EXITO
      this.presentToast('Movimiento agregado exitosamente!', false);

    } catch (error) {
      // MENSAJE DE ERROR
      this.presentToast('Algo ha salido mal...', true);
    } 

  }

  

  async presentToast(message: string, isError:boolean){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: !isError ? "success" : "danger"
    });

    toast.present();

  }

}
