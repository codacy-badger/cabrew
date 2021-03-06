isc.defineClass("BrewContacts", "myWindow").addProperties({
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.BrewContactsDS = isc.myDataSource.create({
			dataURL: serverPath + "BrewContacts.php",
			fields:[
				{name: "contactID", primaryKey: true, type: "sequence", detail: true},
				{name: "clubID", detail: true, required: true},
				{name: "contactName"},
				{name: "priority", width: 75}
			]
		});
		this.BrewContactsLG = isc.myListGrid.create({
			parent: this,
			name: "Brew Contacts",
			dataSource: this.BrewContactsDS,
			startEditingNew: function(newValues, suppressFocus){
				var moreCriteria = isc.addProperties({}, newValues, {clubID: initData.clubID});
				return this.Super("startEditingNew", [moreCriteria, suppressFocus]);
			}
		});
		this.localContextMenu = isc.myContactMenu.create({
			parent: this,
			callingListGrid: this.BrewContactsLG
		});
		this.addItem(isc.myVLayout.create({members: [this.BrewContactsLG]}));
		this.BrewContactsLG.fetchData({clubID: initData.clubID});
	}
});
