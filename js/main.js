"use strict";
let broadcastChannelRef;
const infoElemRef = document.getElementById('info');
const typedMessageElemRef = document.getElementById('typed-message');
const receivedMessageElemRef = document.getElementById('received-message');

function createChannel() {
  if (!broadcastChannelRef) {
    broadcastChannelRef = new BroadcastChannel('Channel-A');
    broadcastChannelRef.onmessage = receiveMessage;
    showInfo("Channel created!", "green");
  }
}

function receiveMessage(event) {
  clearInfo();
  showMessage(event.data)
}

function sendMessage() {
  if (broadcastChannelRef) {
    broadcastChannelRef.postMessage(typedMessageElemRef.value);
    clearInfo();
    clearTypedMessage();
    clearReceivedMessage();
    showInfo("Message sent to the connected channels", "green");
  } else {
    showInfo("Create a broadcast channel first and then proceed.", "red");
  }
}

function closeChannel() {
  if (broadcastChannelRef) {
    clearInfo();
    broadcastChannelRef.close();
    broadcastChannelRef = null;
  } else {
    showInfo("There is no channel to close.", "red");
  }
}

function clearReceivedMessage() {
  receivedMessageElemRef.innerHTML = "";
}

function clearTypedMessage() {
  typedMessageElemRef.value = "";
}


function clearInfo() {
  infoElemRef.innerHTML = "";
}

function showInfo(message, color) {
  infoElemRef.innerHTML = "<b style='color: " + color + "'>" + message + "</b>"
}

function showMessage(message) {
  receivedMessageElemRef.innerHTML = "<i style='color:blue'><b>Message Received: </b></i>" + message + "</i>"
}












