isc.defineClass("MemberDates", "myWindow").addProperties({
	title: "Members By Date",
	autoFetch: true,
	hideNames: false,
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.MemberDatesDS = isc.myDataSource.create({
			dataURL: "MemberDates.php",
			showFilterEditor: true,
			fields:[
				{name: "memberID", primaryKey: true, type: "sequence", detail: true},
				{name: "FullName"},
				{name: "lastName", detail: true},
				{name: "firstName", detail: true},
				{name: "sex", detail: true},
				{name: "statusTypeID_fk", title: "Status", optionDataSource: isc.Shared.statusTypesDS, displayField: "displayLOV", valueField: "valueLOV"},
				{name: "dateTypeID", title: "Date Type", optionDataSource: isc.Shared.dateTypesDS, displayField: "dateType", valueField: "dateTypeID"},
				{name: "Points"},
				{name: "Year", type: "SelectItem", optionDataSource: isc.Shared.eventYearsDS, displayField: "Year", valueField: "Year"},
				{name: "memberDate"},
				{name: "DateDetail"}
			]
		});
		this.MemberDatesLG = isc.myListGrid.create({
			showFilterEditor: true,
			autoFetchData: false,
			dataSource: this.MemberDatesDS,
			rowContextClick: function(record, rowNum, colNum){
				this.parent.localContextMenu.showContextMenu();
				return false;
			}
		});
		this.localContextMenu = isc.myFullMenu.create({
			parent: this,
			callingListGrid: this.MemberDatesDS
		});
		this.MemberDatesVL = isc.myVLayout.create({members: [this.MemberDatesLG]});
		this.addItem(this.MemberDatesVL);
		if(initData.hideNames && initData.hideNames == true) {
			this.MemberDatesLG.hideField("FullName");
			this.MemberDatesLG.hideField("statusTypeID_fk");
			this.MemberDatesLG.hideField("DateDetail");
			this.MemberDatesLG.hideField("Year");
			this.MemberDatesLG.setShowFilterEditor(false);
		}
		if(initData.autoFetch && initData.autoFetch == true) {
			this.MemberDatesLG.fetchData({memberID: initData.memberID});
		}
	}
});
