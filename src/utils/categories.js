import React from 'react';
import { BsStar } from 'react-icons/bs';
import { MdOutlineLocalMovies, MdOutlineUpcoming } from 'react-icons/md';

const categories = [
  {
    id: 1,
    name: 'Popular',
    path: '/',
    icon: <MdOutlineLocalMovies />,
  },
  {
    id: 2,
    name: 'Upcoming',
    path: '/upcoming',
    icon: <MdOutlineUpcoming />,
  },
  {
    id: 3,
    name: 'Top rated',
    path: '/top_rated',
    icon: <BsStar />,
  },
];

export default categories;
