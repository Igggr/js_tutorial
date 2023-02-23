// 1 Создайте дату

const date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// 2 Покажите день недели
function getWeekDay(date: Date): string {
    const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

// 3. День недели в европейской нумерации
function getLocalDay(date: Date) {
    const days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
}

// 4 Какой день месяца был много дней назад?
function getDateAgo(date: Date, days: number): number {
    const copy = new Date(date);
    copy.setHours(copy.getHours() - 24 * days);
    return copy.getDate();
}

// 5 Последнее число месяца?
export function getLastDayOfMonth(year: number, month: number) {
    const date = new Date(year, month, 1);

    for (let i = 28; i <= 32; i++) {
        date.setDate(i);
        if (date.getMonth() !== month) {
            return i-1;
        }
    }
}

// 6 Сколько сегодня прошло секунд?
function  getSecondsToday(): number {
    const date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

// 7  Сколько секунд осталось до завтра?
function getSecondsToTomorrow(): number {
    const date = new Date();
    const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    return Math.round((+tomorrow - +date) / 1000)
}

// 8 Форматирование относительной даты
export function formatDate(date: Date) {
    const now = new Date();
    const diff = +now - +date;

    if (diff < 1000) {
        return "прямо сейчас"
    } else if (diff < 1000*60) {
        return `${Math.floor(diff/1000)} сек. назад`
    } else if (diff < 1000*60*60) {
        return `${Math.floor(diff / (1000 * 60))} мин. назад`
    } else {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(2);
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        return `${day}.${month}.${year} ${hour}:${minute}`;
    }
}
