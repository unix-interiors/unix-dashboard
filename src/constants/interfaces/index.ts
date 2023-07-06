import { EToastMsg } from '..';

export * from './staff';

export interface IToastMessage {
  show: boolean;
  message: string;
  type: EToastMsg;
}
