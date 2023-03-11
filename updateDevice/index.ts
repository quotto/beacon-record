import { Context } from "@azure/functions";
module.exports = function (context: Context, input: any) {
    context.log('Document:', JSON.stringify(input));
    const updateData = input.map((doc: any)=>{
        return {
            id: doc.deviceID,
            scannedTime: doc.scannedTime,
            roomID: doc.roomID
        }
    });
    context.bindings.outputDocument = JSON.stringify(updateData);
    context.bindings.signalRMessages = [{
        "target": "beaconUpdate",
        "arguments": [updateData]
    }]
    context.done();
};