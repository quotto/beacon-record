import { Context, HttpRequest } from "@azure/functions";
module.exports = async function (context: Context, req: HttpRequest, connectionInfo: any) {
    context.res!.body = connectionInfo;
};