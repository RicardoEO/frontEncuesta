import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstilosService } from 'src/app/services/estilos.service';
import { EncuestaService } from '../../services/encuesta.service';
import Swal from'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  form: FormGroup;
  encuesta: any;
  estilos: any[] = [];

  constructor( private fb: FormBuilder, private encuestaService: EncuestaService, private estilosService: EstilosService, private toastr: ToastrService ) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.estilosService.getEstilos().subscribe(resp => {
      this.estilos = resp;
      console.log(this.estilos);
    });
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      estilo: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  get emailNoValido() {
    return this.form.get('correo').invalid && this.form.get('correo').touched;
  }

  get estiloNoValido() {
    return this.form.get('estilo').invalid && this.form.get('estilo').touched;
  }
 
  guardar() {
    console.log(this.form.controls);
    
    if(this.form.invalid) {
      
      Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
      });

      if(this.form.get('correo').hasError('email')) {
        this.toastr.error('El correo ingresado es inválido');
      } else {
        this.toastr.error('Faltan datos');
      }


    } else {

      this.encuesta = {
        idEstiloMusical: this.form.get('estilo').value,
        correo: this.form.get('correo').value
      }

      Swal.fire({
        title: 'Confirmación',
        text: '¿Enviar la encuesta?',
        icon: 'question',
        heightAuto: false,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        allowOutsideClick: false,
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.encuestaService.registrarEncuesta(this.encuesta).subscribe(resp => {
            Swal.fire({
              title: 'Encuesta agregada!',
              text: 'Tu elección ha sido registrada con éxito.',
              icon: 'success',
              heightAuto: false
            })
          },
          err => {
            Swal.fire({
              title: 'Error!',
              text: 'El correo ya se encuentra registrado en las encuestas.',
              icon: 'error',
              heightAuto: false
            })
          });
        }
      })
      


    }
  }

}
