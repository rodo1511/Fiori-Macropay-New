/*global QUnit*/

sap.ui.define([
	"guiascotizador/guiascotizador/controller/Cotizador.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Cotizador Controller");

	QUnit.test("I should test the Cotizador controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
