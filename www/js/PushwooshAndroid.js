function initPushwoosh() {
	var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

  // Should be called before pushwoosh.onDeviceReady
  document.addEventListener('push-notification', function(event) {
		var notification = event.notification;
		// handle push open here
	});
  
	// Initialize Pushwoosh. This will trigger all pending push notifications on start.
	pushwoosh.onDeviceReady({
    appid: "23845-D456F",
		projectid: "315448096113",
		serviceName: "MPNS_SERVICE_NAME"
	});
}