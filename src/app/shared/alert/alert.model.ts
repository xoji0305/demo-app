export type alertType = 'success' | 'info' | 'warning' | 'error';

export class Alert {
  constructor(public type?: alertType,
              public message?: string,
              public params?: any,
              public timeout?: number,
              public isToast?: boolean) {
  }
}
