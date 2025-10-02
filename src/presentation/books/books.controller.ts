@Post(':id/rent')
async rentBook(@Param('id') id: string, @Body() body: { name: string; email: string }) {
  const result = this.bookService.rentBook(id);

  // Se alugado com sucesso, enviar evento
  if (result === 'Book rented successfully') {
    const book = this.bookService.findById(id);
    this.mailClient.emit('book_rented', {
      name: body.name,
      email: body.email,
      bookTitle: book.title,
    });
  }

  return result;
}
