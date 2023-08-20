const logger = (msg: unknown, source: string = "logger") => {
  console.log(`%c>>> ${source}: ${JSON.stringify(msg, null, 2)}`, "color: red");
};

export { logger };
