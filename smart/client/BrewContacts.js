isc.defineClass("BrewContacts", "myWindow").addProperties({
	title: "Brew Contacts",
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.BrewContactsDS = isc.myDataSource.create({
			dataURL: serverPath + "BrewContacts.php",
			autoFetchData: false,
			fields:[
				{name: "contactID", primaryKey: true, type: "sequence", detail: true},
				{name: "clubID", detail: true},
				{name: "contactName"},
				{name: "priority", width: 75}
			]
		});
		this.BrewContactsLG = isc.myListGrid.create({
			parent: this,
			name: "Brew Contacts",
			dataSource: this.BrewContactsDS,
			rowContextClick: function(record, rowNum, colNum){
				this.parent.localContextMenu.showContextMenu();
				return false;
			}
		});
		this.localContextMenu = isc.myContactMenu.create({
			parent: this,
			callingListGrid: this.BrewContactsLG
		});
		this.BrewContactsVL = isc.myVLayout.create({members: [this.BrewContactsLG]});
		this.addItem(this.BrewContactsVL);
		if(initData.clubID){
			this.BrewContactsLG.fetchData({clubID: initData.clubID});
		}
	}
});
