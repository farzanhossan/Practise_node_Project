import {
  bdNumberPrefixValidator,
  bdNumberValidator,
} from '../helper/bdNumberValidator';
import { usingSheetToJsonXLSX } from '../helper/fileRead';
import { usingXLSX, usingXLSXAddColumn } from '../helper/fileWrite';
import { Mail } from '../helper/mail';
import { Winston } from '../helper/winston';
const winstonInit = new Winston();
const winston = winstonInit.logger('Checking');

const sleep = async (milliseconds: any) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export class UserController {
  /// Belongs-To-Many
  test = async (req: any, res: any, next: any) => {
    try {
      // winston.log('info', 'No Error');
      // winston.log('error', 'Error');
      await usingXLSXAddColumn();
      // await usingXLSX(10);
      return res.status(200).json({
        success: 'Success',
      });
    } catch (error) {
      next(error);
    }
  };
}
