import httpCodes from "http-codes";

export default class {
  status;
  ok;
  badRequest;
  serverErr;
  constructor() {
    this.status = httpCodes;
    this.ok = httpCodes.OK;
    this.badRequest = httpCodes.BAD_REQUEST;
    this.serverErr = httpCodes.INTERNAL_SERVER_ERROR;
  }
}
