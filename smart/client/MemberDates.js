isc.defineClass("MemberDates", "myWindow").addProperties({
	initWidget: function(initData){
		this.Super("initWidget", arguments);
		this.MemberDatesLG = isc.myListGrid.create({
			parent: this,
			dataSource: isc.Members.datesDS,
			name: "Member Dates",
			startEditingNew: function(newValues, suppressFocus){
				var newCriteria = isc.addProperties({}, newValues, {memberID_fk: initData.memberID});
				return this.Super("startEditingNew", [newCriteria, suppressFocus]);
			}
		});
		this.localContextMenu = isc.myContextMenu.create({parent: this, callingListGrid: this.MemberDatesLG});
		this.addItem(isc.myVLayout.create({members: [this.MemberDatesLG]}));
		this.MemberDatesLG.fetchData({memberID_fk: initData.memberID});
	}
});
