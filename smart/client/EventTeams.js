isc.defineClass("EventTeams", "myWindow").addProperties({
	initWidget: function(initData){
	this.Super("initWidget", arguments);
	this.EventTeamsDS = isc.myDataSource.create({
		dataURL: serverPath + "EventTeams.php",
		showFilterEditor: true,
		fields:[
			{name: "eventTeamID", primaryKey: true, detail: true, type: "sequence"},
			{name: "eventID", width: 100, type: "integer", title: "Event", optionDataSource: isc.Shared.eventTypesDS, displayField: "eventType", valueField: "eventTypeID", optionCriteria: {active: 'Y'}},
			{name: "eventDay", type: "date", title: "Date", editorType: "DateItem", validators: [{type: "isDate"}]},
			{name: "eventTeamNameID", width: 100, type: "integer", title: "Team", optionDataSource: isc.Shared.eventTeamNamesDS, displayField: "teamName", valueField: "eventTeamNameID", optionCriteria: {active: 'Y'}},
			{name: "startTime", width: 100},
			{name: "endTime", width: 100},
			{name: "teamMember", width: "*", validators: [{type: "lengthRange", max: 45}]},
			{name: "notes", width: 300, validators: [{type: "lengthRange", max: 1000}], detail: true},
			{name: "lastChangeDate", width: 100, detail: true}
		]
	});
	this.EventTeamsLG = isc.myListGrid.create({
		parent: this,
		name: "Beer list",
		showFilterEditor: true,
		dataSource: this.EventTeamsDS,
		initialSort: [
			{property: "eventID", direction: "ascending"},
			{property: "eventDay", direction: "ascending"},
			{property: "startTime", direction: "ascending"},
			{property: "eventTeamNameID", direction: "ascending"},
			{property: "teamMember", direction: "ascending"}
		],
		startEditingNew: function(newValues, suppressFocus){
			var data;
			var eventDay;
			var eventID;
			var workTeam;
			if(this.anySelected()){
				data = this.getSelectedRecord();
				eventDay = data.eventDay;
				eventID = data.eventID;
				workTeam = data.workTeam;
			}
			var rowDefaults = {workTeam: workTeam, eventDay: eventDay, eventID: eventID};
			var newCriteria = isc.addProperties({}, newValues, rowDefaults);
			return this.Super("startEditingNew", [newCriteria, suppressFocus]);
		}
	});
	this.localContextMenu = isc.myContextMenu.create({
		parent: this,
		callingListGrid: this.EventTeamsLG
	});
	this.addItem(isc.myVLayout.create({members: [this.EventTeamsLG]}));
  }
});
