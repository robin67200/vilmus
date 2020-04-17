import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

export interface DialogModal {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  opened: boolean;
  contact: string;
  name: string;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactModal, {
      width: '600px',
      height: '600px'
    });
  }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact.modal.html',
  styleUrls: ['./nav.component.css']

})
// tslint:disable-next-line: component-class-suffix
export class ContactModal {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ContactModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModal,
    private fb: FormBuilder,
    public dialog: MatDialog,

    ) {
      this.form = this.fb.group({
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required]),
        mail: new FormControl('', [Validators.required,
        Validators.email]),
      });
    }

    get nom() {return this.form.get('nom'); }
    get prenom() {return this.form.get('prenom'); }
    get message() {return this.form.get('message'); }
    get mail() {return this.form.get('mail'); }

  save() {
    if (this.form.valid) {
    this.dialogRef.close();
    this.dialog.open(ContactOkModal, {
      width: '600px',
      height: '200px'
    });
    
    
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactModal, {
      width: '600px',
      height: '600px'
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-contactok-modal',
  templateUrl: './contactOk.modal.html',
  styleUrls: ['./nav.component.css']

})

// tslint:disable-next-line: component-class-suffix
export class ContactOkModal {

  constructor(
    public dialogRef: MatDialogRef<ContactOkModal>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
