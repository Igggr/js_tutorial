// 1. Сделать первый символ заглавным
export function ucFirst(str: string): string {
    if (str.length === 0) {
        return ""
    }
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// 2. Проверка на спам
function checkSpam(str: string): boolean {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// 3. Усечение строки
export function truncate(str: string, maxLength: number): string {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "…";
    }
    return str;
}

// 4. Выделить число
export function extractCurrencyValue(str: string): number {
    return +str.slice(1);
}