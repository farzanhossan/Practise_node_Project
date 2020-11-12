import { usingSheetToJsonXLSX } from '../helper/fileRead';
import { usingXLSX } from '../helper/fileWrite';
import { Mail } from '../helper/mail';

export class UserController {
  /// Belongs-To-Many
  test = async (req: any, res: any, next: any) => {
    try {
      // await usingFs();
      await usingXLSX();
      // await usingSheetToJsonXLSX();

      // //Mail
      // const email = 'test@gmail.com';
      // const subject = 'Test';
      // const text= 'Hi';
      // await Mail(email, subject, text);
      // //endMail
      return res.status(200).json({
        success: 'Success',
      });
    } catch (error) {
      next(error);
    }
  };
}
