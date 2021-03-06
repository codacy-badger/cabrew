isc.defineClass("EventSteps", "myWindow").addProperties({
	initWidget: function(initData){
	this.Super("initWidget", arguments);
	this.StepListDS = isc.myDataSource.create({
		dataURL: serverPath + "EventSteps.php",
		showFilterEditor: true,
		fields:[
			{name: "dayID", primaryKey: true, detail: true, type: "sequence"},
			{name: "typeID", width: 120, type: "integer", title: "Type"},
			{name: "eventID", width: 120, type: "integer", title: "Event", optionDataSource: isc.Shared.eventTypesDS, displayField: "eventType", valueField: "eventTypeID", optionCriteria: {active: 'Y'}},
			{name: "stepStart", type: "date", title: "Start", editorType: "TimeItem", validators: [{type: "isDate"}]},
			{name: "step", width: 300, validators: [{type: "lengthRange", max: 100}]},
			{name: "stepDetails", width: 300, validators: [{type: "lengthRange", max: 1000}], detail: true},
			{name: "lastChangeDate", width: 100, detail: true}
		]
	});
	this.StepListLG = isc.myListGrid.create({
		parent: this,
		name: "Beer list",
		showFilterEditor: true,
		dataSource: this.StepListDS,
		initialSort: [{property: "eventID", direction: "ascending"},{property: "date", direction: "ascending"},{property: "stepStart", direction: "ascending"}]
		// startEditingNew: function(newValues, suppressFocus){
		// 	var data;
		// 	var clubID;
		// 	var eventID;
		// 	if(this.anySelected()){
		// 		data = this.getSelectedRecord();
		// 		clubID = data.clubID;
		// 		eventID = data.eventID;
		// 	}
		// 	var rowDefaults = {clubID: clubID, eventID: eventID};
		// 	var newCriteria = isc.addProperties({}, newValues, rowDefaults);
		// 	return this.Super("startEditingNew", [newCriteria, suppressFocus]);
		// }
	});
	this.localContextMenu = isc.myContextMenu.create({
		parent: this,
		callingListGrid: this.StepListLG
	});
	this.addItem(isc.myVLayout.create({members: [this.StepListLG]}));
	// this.StepListLG.filterData();
  }
});
