import { usingSheetToJsonXLSX } from "../helper/fileRead";
import { usingXLSX } from "../helper/fileWrite";
import { Mail } from "../helper/mail";
import { Winston } from "../helper/winston";

const sleep = async (milliseconds: any) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export class UserController {
  /// Belongs-To-Many
  test = async (req: any, res: any, next: any) => {
    try {
      const winstonInit = new Winston();
      const winston = winstonInit.logger(req.baseUrl);
      winston.info(
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      );
      return res.status(200).json({
        success: "Success",
      });
    } catch (error) {
      next(error);
    }
  };
}
