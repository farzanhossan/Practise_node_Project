import { usingSheetToJsonXLSX } from '../helper/fileRead';
import { usingXLSX } from '../helper/fileWrite';
import { Mail } from '../helper/mail';
import { Winston } from '../helper/winston';
const winstonInit = new Winston();
const winston = winstonInit.logger('Checking');
import JsonModel from '../models/Json';

const sleep = async (milliseconds: any) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export class UserController {
  /// Belongs-To-Many
  test = async (req: any, res: any, next: any) => {
    try {
      const name = {
        notification: {
          title: 'LinkVision',
          body: '<p>Notification Body</p>',
          clickAction: 'open_tv_channel_activity',
          badge: '0',
        },
        data: {
          title: 'LinkVision',
          body: '<p>Notification Body</p>',
          clickAction: 'open_tv_channel_activity',
          contentType: 'tvChannel',
          contentId: '25',
          appName: 'binge',
          imageUrl:
            'uploads/pushNotification/rKE2K59DTFED22Qhx1mSxhS4YyB2bJEjvY.png',
          badge: '0',
        },
      };
      // const _json = await JsonModel.create({
      //   json: name,
      // });
      const _json = await JsonModel.findAll();
      return res.status(200).json({
        success: _json,
      });
    } catch (error) {
      next(error);
    }
  };
}
