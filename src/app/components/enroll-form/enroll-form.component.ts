import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.scss']
})
export class EnrollFormComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    eMail: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  invalidForm: boolean;

  onSubmit() {
    let data = null;
    if(!this.contactForm.invalid) {
       data = {
        name : this.contactForm.controls.name.value,
        email: this.contactForm.controls.eMail.value,
        phone : this.contactForm.controls.phone.value,
        message : this.contactForm.controls.message.value
      }
      console.log(data);
      
    } else {
        this.invalidForm = true;
        for (var key in this.contactForm.controls) {
          this.contactForm.controls[key].markAsTouched();
        }
    }

    if (data) {
      this.activeModal.close();
      this.contactService.submitData(data).subscribe(res => {
        this.contactForm.reset();
        alert(res.msg);
      }, error => {
        this.contactForm.reset();
        alert("Sorry! Failed to submit the request. Please try again.");
      })

    }


  }

  constructor(public activeModal: NgbActiveModal, private contactService: ContactService) {}

  ngOnInit(): void {
  }

}
