function getDate(period){
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let lastWeekDay = String(date.getDate() - 7).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let monthBack = String(date.getMonth()).padStart(2, "0")
    let dateMonthBack = `${currentYear}-${monthBack}-${currentDay}`
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    if(period == "Month") {
        return dateMonthBack + ',' + currentDate
    }
    if(period == "Week") {
        if(date.getDate() <= 7 ) {
            let remaining_days = 7 - date.getDate();
            let prev_month_days = 30 - remaining_days;
            return `${currentYear}-${currentMonth}-${prev_month_days}` + ',' + currentDate 
        } else {
            let lastWeekDate = `${currentYear}-${currentMonth}-${lastWeekDay}`;
            return lastWeekDate + ',' + currentDate 
        }
    }
    if(period == "New_this_year") {
        return currentDate + ',' + `${currentYear}-${'12-31'}`;
    }
}

export default getDate