import type { ReadingPlan } from '../types/storage';

export const READING_PLANS: ReadingPlan[] = [
  {
    id: 'gospel-of-john',
    name: 'The Gospel of John',
    description:
      'A 21-day journey through the Gospel of John — the most theological of the four Gospels — exploring who Jesus is and what it means to believe in him.',
    days: [
      { day: 1, title: 'The Word Became Flesh', reference: 'John 1:1-18', bookId: 'JHN', chapter: 1, completed: false },
      { day: 2, title: 'John the Baptist & First Disciples', reference: 'John 1:19-51', bookId: 'JHN', chapter: 1, completed: false },
      { day: 3, title: 'Water into Wine & Temple Clearing', reference: 'John 2', bookId: 'JHN', chapter: 2, completed: false },
      { day: 4, title: 'Born Again — Nicodemus', reference: 'John 3', bookId: 'JHN', chapter: 3, completed: false },
      { day: 5, title: 'The Samaritan Woman', reference: 'John 4', bookId: 'JHN', chapter: 4, completed: false },
      { day: 6, title: 'Healing & the Son\'s Authority', reference: 'John 5', bookId: 'JHN', chapter: 5, completed: false },
      { day: 7, title: 'Feeding the 5,000 & Bread of Life', reference: 'John 6', bookId: 'JHN', chapter: 6, completed: false },
      { day: 8, title: 'Living Water & Light of the World', reference: 'John 7-8', bookId: 'JHN', chapter: 7, completed: false },
      { day: 9, title: 'Healing the Blind Man', reference: 'John 9', bookId: 'JHN', chapter: 9, completed: false },
      { day: 10, title: 'The Good Shepherd', reference: 'John 10', bookId: 'JHN', chapter: 10, completed: false },
      { day: 11, title: 'The Resurrection of Lazarus', reference: 'John 11', bookId: 'JHN', chapter: 11, completed: false },
      { day: 12, title: 'Mary\'s Anointing & Triumphal Entry', reference: 'John 12', bookId: 'JHN', chapter: 12, completed: false },
      { day: 13, title: 'The Last Supper & Foot Washing', reference: 'John 13', bookId: 'JHN', chapter: 13, completed: false },
      { day: 14, title: 'I Am the Way, the Truth, the Life', reference: 'John 14', bookId: 'JHN', chapter: 14, completed: false },
      { day: 15, title: 'The True Vine', reference: 'John 15', bookId: 'JHN', chapter: 15, completed: false },
      { day: 16, title: 'The Holy Spirit & Grief into Joy', reference: 'John 16', bookId: 'JHN', chapter: 16, completed: false },
      { day: 17, title: 'The High Priestly Prayer', reference: 'John 17', bookId: 'JHN', chapter: 17, completed: false },
      { day: 18, title: 'Arrest & Trial', reference: 'John 18', bookId: 'JHN', chapter: 18, completed: false },
      { day: 19, title: 'The Crucifixion', reference: 'John 19', bookId: 'JHN', chapter: 19, completed: false },
      { day: 20, title: 'The Resurrection', reference: 'John 20', bookId: 'JHN', chapter: 20, completed: false },
      { day: 21, title: 'Restoration & the Great Commission', reference: 'John 21', bookId: 'JHN', chapter: 21, completed: false },
    ],
  },
];
