import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {Alert} from "./alert.model";
import {AlertService} from "./alert.services";
import {EventManager} from "../../core/util/event-manager.service";

@Component({
  selector: 'alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-alert *ngIf="alert" class="mb-3" [nzType]="alert.type" nzMessage="{{ alert.message }}" nzShowIcon nzCloseable (nzOnClose)="clear()">
    </nz-alert>
  `,
})
export class AlertComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private errorSubscription?: Subscription;

  alert: Alert;

  constructor(
    private readonly alertService: AlertService,
    private readonly eventManager: EventManager,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.alertService
      .get()
      .pipe(takeUntil(this.destroy$))
      .subscribe(alert => {
        this.alert = alert;

        if (alert) {
          window.scrollTo(0, 0);
        }

        this.cdr.detectChanges();
      });

    this.errorSubscription = this.eventManager.subscribe('billMasterGwApp.httpError', (response: any) =>
      this.alertService.error(response.content.error?.detail || response.content.message)
    );
  }

  clear(): void {
    this.alertService.clear();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.errorSubscription?.unsubscribe();
    this.alertService.clear();
  }
}
