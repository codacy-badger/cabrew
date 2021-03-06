isc.defineClass("ChairTypes", "myWindow").addProperties({
	initWidget: function(initData){
	this.Super("initWidget", arguments);
	this.ChairTypesLG = isc.myListGrid.create({
		parent: this,
		dataSource: isc.Shared.chairTypesDS,
		name: "Chair Types"
	});
	this.localContextMenu = isc.myContextMenu.create({
		parent: this,
		callingListGrid: this.ChairTypesLG
	});
	this.addItem(isc.myVLayout.create({members: [this.ChairTypesLG]}));
	}
});
