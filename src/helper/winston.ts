const { format } = require("winston");
require("winston-daily-rotate-file");
import { transports, createLogger } from "winston";
import "winston-daily-rotate-file";

export const commonInfo = () => {
  const info = {
    filename: `log/%DATE%-combine.log`,
    frequency: "5m",
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "1k",
    maxFiles: "5m",
    level: "custom",
    levelOnly: false,
    handleExceptions: true,
    humanReadableUnhandledException: true,
  };
  return info;
};

export const options = () => {
  const levels = {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
  };
  return levels;
};

export const formatInfo = (fileName: any) => {
  return format.combine(
    format.label({ label: fileName }),
    format.ms(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(
      (info: { level: any; timestamp: any; ms: any; message: any }) =>
        `${info.level} | ${info.timestamp} | ${info.ms} | ${info.message}`
    )
  );
};

export class Winston {
  private __errorTransport() {
    const common = commonInfo();
    common.filename = `log/error-%DATE%-error.log`;
    common.level = "error";
    return new (transports as any).DailyRotateFile(common);
  }
  private __combineTransport() {
    const common = commonInfo();
    common.filename = `log/combine-%DATE%-scheduler.log`;
    common.level = "info";
    return new (transports as any).DailyRotateFile(common);
  }

  logger(fileName: any) {
    return createLogger({
      levels: options(),
      level: "custom",
      format: formatInfo(fileName),
      transports: [this.__errorTransport(), this.__combineTransport()],
      exitOnError: false,
    });
  }
}
