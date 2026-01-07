const weekArray = [
	"周日",
	"周一",
	"周二",
	"周三",
	"周四",
	"周五",
	"周六",
];
const monthNormalArray = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
const monthLeapArray = [
	31,
	29,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
window.time = class {
	constructor(
		year = 2025,
		month = 8,
		day = 31,
		dayOfWeek = 6,
		hour = 8,
		minute = 0
	) {
		this.year = year;
		this.month = month;
		this.day = day;
		this.dayOfWeek = dayOfWeek;
		this.hour = hour;
		this.minute = minute;
		this.isLeap = false;
		this.pause = false;
		this.minuteSun = 0;
		this.daySum = 0;
	}
}
window.Time = {
	getSeason(obj) {
		switch (obj.month) {
			case 2:
			case 3:
			case 4:
				return "春季";
			case 5:
			case 6:
			case 7:
				return "夏季";
			case 8:
			case 9:
			case 10:
				return "秋季";
			case 11:
			case 12:
			case 1:
				return "冬季";
			default:
				console.error("月份出错，当前月份为：" + obj.month);
				break;
		}
	},
	showTime(obj) {
		const showDayOfWeek = weekArray[obj.dayOfWeek];
		const showHour = (obj.hour > 9) ? obj.hour : "0" + obj.hour;
		const showMinute = (obj.minute > 9) ? obj.minute : "0" + obj.minute;
		return `${showDayOfWeek}-${showHour}:${showMinute}`;
	},
	showData(obj) {
		return `${obj.year}年${obj.month}月${obj.day}日`
	},
	format(obj) {
		if (obj.minute > 59) {
			obj.hour += parseInt(obj.minute / 60);
			obj.minute %= 60;
		}
		if (obj.hour > 23) {
			obj.day += parseInt(obj.hour / 24);
			obj.dayOfWeek += parseInt(obj.hour / 24);
			obj.dayOfWeek %= 7;
			obj.daySum += parseInt(obj.hour / 24);
			obj.hour %= 24;
		}
		if (obj.isLeap && obj.day > monthLeapArray[obj.month - 1]) {
			obj.day -= monthLeapArray[obj.month - 1];
			obj.month += 1;
		}
		else if (!obj.isLeap && obj.day > monthNormalArray[obj.month - 1]) {
			obj.day -= monthNormalArray[obj.month - 1];
			obj.month += 1;
		}
		if (obj.month > 12) {
			obj.year += 1;
			obj.month -= 12;
			obj.isLeap = this.isLeap(obj);
		}
	},
	isLeap(obj) {
		if (obj.year % 4 !== 0) {
			return false;
		}
		else if (obj.year % 100 === 0 && year % 400 !== 0) {
			return false;
		}
		else {
			return true;
		}
	},
	pause(obj) {
		obj.pause = !obj.pause;
	},
	increase(obj, minuteNumber) {
		obj.minute += minuteNumber;
		obj.minuteSun += minuteNumber;
		this.format(obj);
	}
}
const professionArray = [
	"学生",
	"普通人",
	"教师",
	"医生",
	"侍者",
	"高管",
	"工人",
	"农民",
	"福利姬",
	"保姆"
];
const showGenitals = {
	"vagina": "一个小穴",
	"penis": "一根肉棒",
	"both": "一个小穴和一根肉棒"
}
const breastSizeArray = [
	"平坦",
	"娇小",
	"挺拔",
	"适中",
	"圆润",
	"丰满",
	"硕大"
];
const buttocksSizeArray = [
	"平坦",
	"娇小",
	"挺翘",
	"适中",
	"软弹",
	"柔软",
	"饱满"
];
const penisSizeArray = [
	"细微",
	"小巧",
	"偏小",
	"普通",
	"较粗",
	"粗大",
	"宏伟"
];
window.player = class {
	constructor(
		gender = "F",
		profession = 0,
		genitals = "vagina",
		breastSize = 1,
		buttocksSize = 1,
		penisSize = 0
	) {
		this.gender = gender;
		this.profession = profession;
		this.genitals = genitals;
		this.breastSize = breastSize;
		this.buttocksSize = buttocksSize;
		this.penisSize = penisSize;
		this.vaginaVirgin = true;
		this.penisVirgin = true;
		this.anusVirgin = true;
		this.oralVirgin = true;
		this.firstKiss = null;
	}
}
window.Player = {
	show(obj) {
		let showBody = "你是一个";
		switch (obj.gender) {
			case "F":
				showBody += "女孩";
				break;
			case "M":
				showBody += "男孩";
				break;
			case "FM":
				showBody += "扶她";
				break;
			default:
				showBody += "少年";
				break;
		}
		showBody += ",你的职业是";
		showBody += professionArray[obj.profession];
		showBody += ",你的股间长着";
		showBody += showGenitals[obj.genitals];
		showBody += ",";
		switch (obj.breastSize) {
			case 0:
				showBody += "你的胸部非常" + breastSizeArray[obj.breastSize] + ",即使上半身完全裸露出来,也不会有什么人在意,";
				break;
			case 1:
				showBody += "你的胸部十分" + breastSizeArray[obj.breastSize] + ",穿着衣服的情况下，根本看不出起伏,";
				break;
			case 2:
				showBody += "你的胸部稍显" + breastSizeArray[obj.breastSize]+",";
				break;
			case 3:
				showBody += "你的胸部外形" + breastSizeArray[obj.breastSize]+",";
				break;
			default:
				showBody += "你的胸部十分" + breastSizeArray[obj.breastSize]+",";
				break;
		}
		switch (obj.buttocksSize) {
			case 0:
			case 1:
				showBody += "你的臀部十分" + buttocksSizeArray[obj.buttocksSize];
				break;
			case 2:
			case 3:
				showBody += "你的臀部较为" + buttocksSizeArray[obj.buttocksSize];
				break;
			default:
				showBody += "你的臀部非常" + buttocksSizeArray[obj.buttocksSize];
				break;
		}
		if (obj.genitals !== "vagina") {
			showBody += ",";
			switch (obj.penisSize) {
				case 0:
				case 1:
				case 6:
					showBody += "你的肉棒过于" + penisSizeArray[obj.penisSize] + ",在进行某些事情的时候，可能会有些困难";
					break;
				default:
					showBody += "你的肉棒" + penisSizeArray[obj.penisSize] + "但在进行某些事情的时候不会遇到什么困难";
					break;
			}
		}
		showBody += "。";
		return showBody;
	}
}