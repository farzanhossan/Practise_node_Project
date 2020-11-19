import { usingSheetToJsonXLSX } from '../helper/fileRead';
import { usingXLSX } from '../helper/fileWrite';
import { Mail } from '../helper/mail';

const sleep = async (milliseconds: any) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export class UserController {
  /// Belongs-To-Many
  test = async (req: any, res: any, next: any) => {
    try {
      // await usingFs();
      // await usingXLSX();
      // await usingSheetToJsonXLSX();

      // //Mail
      // const email = 'test@gmail.com';
      // const subject = 'Test';
      // const text= 'Hi';
      // await Mail(email, subject, text);
      // //endMail
      const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
      let ni = 0;
      for (const element of arr) {
        console.log(`${new Date()} =====> ${ni}`);
        ni++;
        if (ni == 4) {
          ni = 0;
          await sleep(3000);
          console.log(`${new Date()} =====> ${ni}`);
        }
      }

      return res.status(200).json({
        success: 'Success',
      });
    } catch (error) {
      next(error);
    }
  };
}
