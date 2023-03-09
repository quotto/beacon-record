import { Context, HttpRequest } from "@azure/functions";
module.exports = function (context: Context, input: any) {
    context.log('Document:', JSON.stringify(input));
    context.log(JSON.stringify(context.bindings.inputDocument));
    const updateData = {
        id: input[0].deviceID,
        scanedTime: input[0].scanedTime,
        originID: input[0].originID
    }
    context.bindings.outputDocument = JSON.stringify(updateData);
    context.done();
};