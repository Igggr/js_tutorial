// 1 Фильтрация уникальных элементов массива

function unique<T>(arr: T[]) {
    const visited = new Set<T>();
    return arr.filter((el) => {
        if (visited.has(el)) return false;
        visited.add(el);
        return true;
    })    
}


// 2. Отфильтруйте анаграммы
function aClean(words: string[]) {
    const visited = new Set<string>();

    return words.filter((word) => {
        const key = [...word.toLowerCase()].sort().join();
        if (visited.has(key)) return false;
        visited.add(key);
        return true;
    })

}

// 3.