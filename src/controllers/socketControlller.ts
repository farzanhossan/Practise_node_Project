
export class SocketController {
  test = async (req: any, res: any, next: any) => {
    try {
      res.sendFile(__dirname + '/index.html');
    } catch (error) {
      next(error);
    }
  };
}
