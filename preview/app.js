/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
var config = {
	host: "localhost",
	prefix: "/",
	port: 4848,
	isSecure: window.location.protocol === "https:"
};
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});
//console.log((config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources")
require(["js/qlik"], function (qlik) {
	console.info('---------------- preview -- starting');
	qlik.setOnError(function (error) {
		console.error(error);
	});
	let app = qlik.openApp('preview.qvf', config);
	app.visualization.get("hmUNq").then(viz=>{
		viz.show("preview");
	});

});
