import { Context, HttpRequest } from "@azure/functions";
module.exports = function (context: Context, input: any) {
    context.log('Document:', JSON.stringify(input));
    context.log(JSON.stringify(context.bindings.inputDocument));
    const updateData = input.map((doc: any)=>{
        return {
            id: doc.deviceID,
            scannedTime: doc.scannedTime,
            originID: doc.originID
        }
    });
    context.bindings.outputDocument = JSON.stringify(updateData);
    context.bindings.signalRMessages = [{
        "target": "beaconUpdate",
        "arguments": [updateData]
    }]
    context.done();
};