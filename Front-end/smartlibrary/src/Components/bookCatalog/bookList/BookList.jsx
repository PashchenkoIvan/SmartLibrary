import React from 'react';
import Book from './book/Book';
import s from './bookList.module.css';

let bookMap = [
  {
    bookAuthor: "#Сергій Жадан, Любко Дереш, Юрій Андрухович",
    linkToBook: "#",
    bookName: "Трициліндровий двигун любові",
    bookImg: "https://drive.google.com/uc?export=view&id=1I6e9S0yWLcKpDrDwCFQW3Ki9a5AxR_uT",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Юрій Андрухович",
    linkToBook: "#",
    bookName: "12 обручів",
    bookImg: "https://drive.google.com/uc?export=view&id=1-Qz85aAQHVPvc5qhGELvKY6Jb0NXeUgy",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Римма Запесоцька",
    linkToBook: "#",
    bookName: "Избранные сны",
    bookImg: "https://drive.google.com/uc?export=view&id=1K4IOE_g3_09T7O8HX5zleCRuUGxiBe8O",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Катерина Бабкіна",
    linkToBook: "#",
    bookName: "Заговорено на любов",
    bookImg: "https://drive.google.com/uc?export=view&id=10KtRm7iX2eEvmbkVFLKFeuo1dYBJDm7y",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Василь Базів",
    linkToBook: "#",
    bookName: "Армагедон на Майдані",
    bookImg: "https://drive.google.com/uc?export=view&id=1G7En-T1SN9exxirncl1GwvlX1U7IbHEs",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Ярослав Яріш, Ярослава Бакалець",
    linkToBook: "#",
    bookName: "Із сьомого дна",
    bookImg: "https://drive.google.com/uc?export=view&id=1QsUcz7nIvRG0HoYbtLLLBPRb3okU0gsT",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Беркут Ігор",
    linkToBook: "#",
    bookName: "Брат - 2",
    bookImg: "https://drive.google.com/uc?export=view&id=1iIAS2lj3KIm_ke7B1MAtJbZEvPPvfQgz",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Іван Білик",
    linkToBook: "#",
    bookName: "Похорон Богів",
    bookImg: "https://drive.google.com/uc?export=view&id=1PrEfoBj99A7lzXXuw3nxY5d5rw4OLWyw",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Євгеній Тищенко",
    linkToBook: "#",
    bookName: "Светлоносец. Меч Воли",
    bookImg: "https://drive.google.com/uc?export=view&id=1YuwgLPX4SHHmHCn9KaGOy50VbIbpD6C1",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Мартін Брест",
    linkToBook: "#",
    bookName: "Пехота",
    bookImg: "https://drive.google.com/uc?export=view&id=1i3G_irKX2T5UXvi6a9XAn3Jm-MyjdN5a",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Есаулов Олександр",
    linkToBook: "#",
    bookName: "Переможців не судять",
    bookImg: "https://drive.google.com/uc?export=view&id=1qzjaXYKeUvHsDFOp5MdP4h6flXttWFui",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
  {
    bookAuthor: "#Галина Вдовиченко",
    linkToBook: "#",
    bookName: "Пів'яблука. Інші пів'яблука",
    bookImg: "https://drive.google.com/uc?export=view&id=1kDneD_RppqKN5d4kOS_dLBWY4Ifh3O0Q",
    ganreImg: "http://1.smart-library.in.ua/img/icon.png",
    ganreText: "Художня література",
  },
]

const BookList = () => {
  let bookMapAdd = bookMap.map(b => <Book bookAuthor={b.bookAuthor} linkToBook={b.linkToBook} bookName={b.bookName} bookImg={b.bookImg} ganreImg={b.ganreImg} ganreText={b.ganreText} />)

  return (
    <div className={s.bookList}>
      {bookMapAdd}
    </div>
  )
}

export default BookList;