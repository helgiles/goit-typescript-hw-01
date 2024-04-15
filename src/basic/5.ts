enum WeekDay {
	MONDAY,
	TUESDAY,
	WEDNESDAY,
	THURSDAY,
	FRIDAY,
	SATURDAY,
	SUNDAY,
}

function isWeekend(day: WeekDay): boolean {
	if (WeekDay.SATURDAY || WeekDay.SUNDAY) {
		return true;
	} else {
		return false;
	}
}
