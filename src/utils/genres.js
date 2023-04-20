import React from 'react';
import { BiCameraMovie, BiHeart } from 'react-icons/bi';
import { TfiFaceSad, TfiFaceSmile } from 'react-icons/tfi';
import {
  MdOutlineFamilyRestroom,
  MdOutlineAnimation,
  MdOutlineScience,
  MdHistoryEdu,
  MdOutlineMiscellaneousServices,
} from 'react-icons/md';
import {
  GiCrimeSceneTape,
  GiMagicShield,
  GiMusicSpell,
  GiTv,
  GiWarAxe,
  GiWesternHat,
  GiMountains,
  GiHalfDead,
  GiDeadHead,
  GiSwitchWeapon,
} from 'react-icons/gi';

const genres = [
  {
    id: 28,
    name: 'Action',
    icon: <GiSwitchWeapon />,
  },
  {
    id: 12,
    name: 'Adventure',
    icon: <GiMountains />,
  },
  {
    id: 16,
    name: 'Animation',
    icon: <MdOutlineAnimation />,
  },
  {
    id: 35,
    name: 'Comedy',
    icon: <TfiFaceSmile />,
  },
  {
    id: 80,
    name: 'Crime',
    icon: <GiCrimeSceneTape />,
  },
  {
    id: 99,
    name: 'Documentary',
    icon: <BiCameraMovie />,
  },
  {
    id: 18,
    name: 'Drama',
    icon: <TfiFaceSad />,
  },
  {
    id: 10751,
    name: 'Family',
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    id: 14,
    name: 'Fantasy',
    icon: <GiMagicShield />,
  },
  {
    id: 36,
    name: 'History',
    icon: <MdHistoryEdu />,
  },
  {
    id: 27,
    name: 'Horror',
    icon: <GiDeadHead />,
  },
  {
    id: 10402,
    name: 'Music',
    icon: <GiMusicSpell />,
  },
  {
    id: 9648,
    name: 'Mystery',
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    id: 10749,
    name: 'Romance',
    icon: <BiHeart />,
  },
  {
    id: 878,
    name: 'Science Fiction',
    icon: <MdOutlineScience />,
  },
  {
    id: 10770,
    name: 'TV Movie',
    icon: <GiTv />,
  },
  {
    id: 53,
    name: 'Thriller',
    icon: <GiHalfDead />,
  },
  {
    id: 37,
    name: 'Western',
    icon: <GiWesternHat />,
  },

  {
    id: 10752,
    name: 'War',
    icon: <GiWarAxe />,
  },
];

export default genres;
