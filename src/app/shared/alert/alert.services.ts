import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Alert} from "./alert.model";

@Injectable({providedIn: 'root'})
export class AlertService {
  private alert = new ReplaySubject<Alert>();

  constructor(private readonly toastService: NzMessageService) {
  }

  add(alert: Alert): void {
    alert.params = alert.params instanceof Object ? alert.params : {param: alert.params};

    if (alert.isToast) {
      this.toastService.create(alert.type, alert.message, {nzDuration: alert.timeout || 4000});
    } else {
      this.alert.next(alert);
    }

    if (alert.timeout) {
      setTimeout(() => this.clear(), alert.timeout);
    }
  }

  success(msg: string, params?: any, isToast?: boolean): void {
    const alert: Alert = {
      type: 'success',
      message: msg,
      params: params,
      isToast: isToast,
    };

    this.add(alert);
  }

  info(msg: string, params?: any, isToast?: boolean): void {
    const alert: Alert = {
      type: 'info',
      message: msg,
      params: params,
      isToast: isToast,
    };

    this.add(alert);
  }

  warning(msg: string, params?: any, isToast?: boolean): void {
    const alert: Alert = {
      type: 'warning',
      message: msg,
      params: params,
      isToast: isToast,
    };

    this.add(alert);
  }

  error(msg: string, params?: any, isToast?: boolean, timeout?: number): void {
    const alert: Alert = {
      type: 'error',
      message: msg,
      params: params,
      isToast: isToast,
      timeout: timeout,
    };

    this.add(alert);
  }

  get(): Observable<Alert> {
    return this.alert.asObservable();
  }

  clear(): void {
    this.alert.next(null);
  }
}
