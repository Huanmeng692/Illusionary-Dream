Macro.add("StoryInit", {
	handler() {
		State.variables.time = new window.time();
		State.variables.player = new window.player();
	}
})