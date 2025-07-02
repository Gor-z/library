let library = []

function Book(id, title, author, pages, isRead) {
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

Book.prototype.toggleStatus = function() {
    this.isRead = !this.isRead
}


function addBook(title, author, pages, isRead) {
    const book = new Book(crypto.randomUUID(), title, author, pages, isRead)
    library.push(book)
}