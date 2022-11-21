import React from 'react';
import Book from './book/Book';
import s from './bookList.module.css';

let bookMap = [
  {
    bookAuthor: "#Сергій Жадан, Любко Дереш, Юрій Андрухович",
    linkToBook: "#",
    bookName: "Трициліндровий двигун любові",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Юрій Андрухович",
    linkToBook: "#",
    bookName: "12 обручів",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Римма Запесоцька",
    linkToBook: "#",
    bookName: "Избранные сны",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Катерина Бабкіна",
    linkToBook: "#",
    bookName: "Заговорено на любов",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Василь Базів",
    linkToBook: "#",
    bookName: "Армагедон на Майдані",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Ярослав Яріш, Ярослава Бакалець",
    linkToBook: "#",
    bookName: "Із сьомого дна",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Беркут Ігор",
    linkToBook: "#",
    bookName: "Брат - 2",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Іван Білик",
    linkToBook: "#",
    bookName: "Похорон Богів",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Євгеній Тищенко",
    linkToBook: "#",
    bookName: "Светлоносец. Меч Воли",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Мартін Брест",
    linkToBook: "#",
    bookName: "Пехота",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Есаулов Олександр",
    linkToBook: "#",
    bookName: "Переможців не судять",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Галина Вдовиченко",
    linkToBook: "#",
    bookName: "Пів'яблука. Інші пів'яблука",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
]

const BookList = () => {
  let bookMapAdd = bookMap.map(b => <Book bookAuthor={b.bookAuthor} linkToBook={b.linkToBook} bookName={b.bookName} ganreImg={b.ganreImg} ganreText={b.ganreText} />)

  return (
    <div className={s.bookList}>
      {bookMapAdd}
    </div>
  )
}

export default BookList;