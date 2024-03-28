const getStoredBooks = (listType) => {
    const storedReadBooks = localStorage.getItem(listType);
    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const isExist = (id, listType) => {
    const storedBooks = getStoredBooks(listType);
    return storedBooks.find(bookId => bookId === id);
}

const saveBooks = (id, listType) => {
    const storedBooks = getStoredBooks(listType);
    storedBooks.push(id);
    localStorage.setItem(listType, JSON.stringify(storedBooks))

}
const removeBooks = (id, listType) => {
    const storedBooks = getStoredBooks(listType);
    const remainBooks = storedBooks.filter(bookid => bookid !== id);
    localStorage.setItem(listType, JSON.stringify(remainBooks))

}

export { saveBooks, getStoredBooks, isExist, removeBooks }