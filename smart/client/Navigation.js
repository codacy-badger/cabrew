isc.defineClass("Navigation", "Menu").addProperties({
	initWidget: function(initData){
		this.membersMenu = isc.myMenu.create({
			title: "Members",
			items: [
				{title: "By Points", click: "isc.MemberPoints.create({width: 900, height: 300});"},
				{isSeparator: true},
				{title: "Add Date", click: "isc.AddEvent.create({width: 300, height: \"95%\", title: \"Add Date\"});"},
				{title: "Add Payment", click: "isc.AddPayment.create({width: 800, height: 275});"},
				{title: "Send Message", click: "isc.SendMessage.create({width: 800, height: \"95%\"});"}
			]
		});
		this.MiscMenu = isc.myMenu.create({
			title: "Misc Tables",
			items: [
				{title: "Chair Types", click: "isc.ChairTypes.create()"},
				{title: "Contact Types", click: "isc.ContactTypes.create()"},
				{title: "Date Types", click: "isc.DateTypes.create()"},
				{title: "Schedule Types", click: "isc.ScheduleTypes.create()"},
				{title: "Status Types", click: "isc.StatusTypes.create()"},
				{isSeparator: true},
				{title: "Test", click: "isc.Test.create()"}

			]
		});
		this.BeerMenu = isc.myMenu.create({
			title: "Beer",
			items: [
				{title: "Hardware Profiles", click: "isc.HardwareProfiles.create()"}
			]
		});
		this.BookMenu = isc.myMenu.create({
			title: "Books",
			items: [
				{title: "Books", click: "isc.LibraryBooks.create({width: \"95%\", height: \"95%\"});"},
				{title: "Loans", click: "isc.LibraryLoans.create({width: 800, height: 400});"}
			]
		});
		this.MainMenu = isc.myMenu.create({
			title: "...",
			showShadow: true,
			items: [
				{title: "Name Search", click: "isc.MemberSearch.create({width: 400, height: \"95%\"});"},
				{isSeparator: true},
				{title: "Members", submenu: this.membersMenu},
				{title: "Books", submenu: this.BookMenu},
				{isSeparator: true},
				{title: "Beer", enabled: false, submenu: this.BeerMenu},
				{isSeparator: true},
				{title: "Clubs", click: "isc.BrewClubs.create({width: \"800\", height: \"66%\"});"},
				{title: "Corporations", click: "isc.Corporations.create({width: \"95%\", height: \"95%\"});"},
				{title: "Scheduling", click: "isc.EventSchedules.create({width: \"95%\", height: \"95%\"});"},
				{title: "Web Posts", click: "isc.WebPosts.create({width: \"95%\", height: \"95%\"});"},
				{isSeparator: true},
				{title: "Misc Tables", submenu: this.MiscMenu}
			]
		});
		this.menuBar = isc.MenuBar.create({
			menus: [this.MainMenu]
		});
	}
});
