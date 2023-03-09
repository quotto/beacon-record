import { Context, HttpRequest } from "@azure/functions";
module.exports = function (context: Context, input: any) {
    console.log('Document:', JSON.stringify(input));
    console.log(JSON.stringify(context.bindings.inputDocument));
    const updateData = {
        id: input.deviceID,
        scanedTime: input.scanedTime,
        originID: input.originID
    }
    context.bindings.outputDocument = JSON.stringify(updateData);
    context.done();
};