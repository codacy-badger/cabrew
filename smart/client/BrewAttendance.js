isc.defineClass("BrewAttendance", "myWindow").addProperties({
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.BrewAttendanceDS = isc.myDataSource.create({
			dataURL: serverPath + "BrewAttendance.php",
			fields:[
				{name: "attendenceID", primaryKey: true, type: "sequence", detail: true, canEdit: false},
				{name: "clubID", required: true, detail: true, canEdit: false},
				{name: "year", required: true, type: "integer"},
				{name: "interested", type: "text", width: 80, editorType: "selectItem", defaultValue: "N", optionDataSource: isc.Clients.yesNoDS, displayField: "displayLOV", valueField: "valueLOV"},
				{name: "participated", type: "text", width: 80, editorType: "selectItem", defaultValue: "N", optionDataSource: isc.Clients.yesNoDS, displayField: "displayLOV", valueField: "valueLOV"},
				{name: "attended", type: "integer"},
				{name: "beers", type: "integer"}
			]
		});
		this.BrewAttendanceLG = isc.myListGrid.create({
			parent: this,
			name: "Brew Club Attendance",
			dataSource: this.BrewAttendanceDS,
			startEditingNew: function(newValues, suppressFocus){
				var moreCriteria = isc.addProperties({}, newValues, {clubID: initData.clubID});
				return this.Super("startEditingNew", [moreCriteria, suppressFocus]);
			}
		});
		this.localContextMenu = isc.myContextMenu.create({
			parent: this,
			callingListGrid: this.BrewAttendanceLG
		});
		this.addItem(isc.myVLayout.create({members: [this.BrewAttendanceLG]}));
		this.BrewAttendanceLG.fetchData({clubID: initData.clubID});
	}
});
