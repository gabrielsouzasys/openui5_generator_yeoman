sap.ui.core.UIComponent.extend("sap.ui.demo.Component", {
	metadata: {
		name: "My Application",
		version: "1.0.0",
		includes: ["css/styles.css"],
		dependencies: {
			libs: ["sap.m"]
		},
		rootView: "sap.ui.demo.view.App"
	}
});
