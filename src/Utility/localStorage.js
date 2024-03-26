const getStoredBooks = (listType) => {
    const storedReadBooks = localStorage.getItem(listType);
    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const saveBooks = (id, listType) => {
    const storedBooks = getStoredBooks(listType);
    const isExist = storedBooks.find(bookId => bookId === id);
    if (!isExist) {
        storedBooks.push(id);
        localStorage.setItem(listType, JSON.stringify(storedBooks))
    }
}

export { saveBooks, getStoredBooks }