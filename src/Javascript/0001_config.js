// 替代全局nobr，去除制表符和代码换行符
Config.passages.onProcess = function (p) {
	return p.text.replace(/[\t\n]+/g, '');
};

// 最大自动保存数量
Config.saves.maxAutoSaves = 1;

// 按照片段tags，自动保存或禁止保存
Config.saves.isAllowed = function (saveType) {
	if (saveType === Save.Type.Auto) {
		return tags().includes("autosave");
	}
	return !tags().includes("nosave");
};

// 保存存档项目显示保存类型
Config.saves.descriptions = function (saveType) {
	return saveType === Save.Type.Auto ? "自动保存" : "手动保存";
};

// $return设置
$(document).on(':passagestart', function (ev) {
	if (!ev.passage.tags.includes('noreturn')) {
		State.variables.return = ev.passage.name;
	}
});