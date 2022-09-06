
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
        weekDates[i] = { day:day.addDays(j) }
    }

    for( let i = dayIndex, j=0; i > 0; i--, j++){
        weekDates[i]  = { day: day.addDays(-j) }
    }

    weekDates[0]  = {day:weekDates[1].day.addDays(-1)}
    weekDates[6] = {day:weekDates[5].day.addDays(1)}

    return weekDates
}

export function isToday(day){
    const today = new Date();
    if( 
        today.getDate() === day.getDate() &&
        today.getMonth() === day.getMonth() &&
        today.getFullYear() === day.getFullYear()){
        return true
    }

}


export function isEqualDay(day1,day2){
    if( 
        day1.getDate() === day2.getDate() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getFullYear() === day2.getFullYear()){
        return true
    }

}


export function getScheduleByDay(day, schedule){
    let result
    schedule.forEach(weekSchedule => {
        weekSchedule.forEach( daySchedule=>{
            if(isEqualDay(daySchedule.day, day)){
                result = daySchedule
            }
        })
    });

    return result
}