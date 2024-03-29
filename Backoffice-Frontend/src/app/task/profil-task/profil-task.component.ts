import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../services/task/task.service";
import {formatDateTime, formatDouble, getStatus} from "../../utils/string.util";

@Component({
  selector: 'app-profil-task',
  templateUrl: './profil-task.component.html',
  styleUrl: './profil-task.component.scss'
})
export class ProfilTaskComponent implements OnInit{
  id: string = '';
  task!: any ;
  totalPrices: number = 0;
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.taskService.get(this.id, data => {
      this.task = data;
      this.totalPrices = this.getTaskTotalPrice(data);
    });
  }

  getTaskTotalPrice(task:any) {
    let totalPrices = 0;
    task.services.forEach((service: { service: { price: number; }; promotion: number; })  => {
      const promotionPrice = service.service.price * (1 - service.promotion / 100); // Appliquer la promotion en pourcentage
      totalPrices += promotionPrice;
    });
    return totalPrices;
  }

  changeStatus(status: number) {
    this.taskService.updateStatus(this.id, status, () => {
      this.taskService.get(this.id, data => {
        this.task = data;
      });
    });
  }

  pay() {
    this.taskService.pay(this.totalPrices,this.id, () => {
      this.taskService.get(this.id, data => {
        this.task = data;
      });
    });
  }

  protected readonly formatDateTime = formatDateTime;
  protected readonly getStatus = getStatus;
  protected readonly formatDouble = formatDouble;
}
