import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from 'src/app/schedule.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
})
export class ScheduleDetailsPage implements OnInit {
  index= 0;
  scheduless:any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private scheduleService: ScheduleService, 
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.scheduless = this.scheduleService.scheduless;
    this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

  async presentToast() { 
    const toast = await this.toastController.create({
      message: 'You will be notified about this event.',
      duration: 2000,
      color: 'medium', 
      position: 'bottom',
    });
    toast.present();
  }
}
