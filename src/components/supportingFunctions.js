
export const days = ['пн','вт','ср','чт','пт','сб','вс']

export function getDayByDate(date){
    let dayIndex = date.getDay()
    dayIndex-=1
    if(dayIndex === -1) {
        dayIndex=6
    }
    return days[dayIndex]
}

Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
}

export function fillWeek(day){
    let weekDates = Array(7)
    let dateName = getDayByDate(day)
    let dayIndex = days.indexOf(dateName)

    for( let i = dayIndex, j=0; i < 6; i++, j++){
        weekDates[i] = day.addDays(j)
    }

    for( let i = dayIndex, j=0; i > 0; i--, j++){
        weekDates[i] = day.addDays(-j)
    }

    weekDates[0] = weekDates[1].addDays(-1)
    weekDates[6] = weekDates[5].addDays(1)

    return weekDates
}