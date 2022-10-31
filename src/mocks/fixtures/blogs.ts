import { IBlogPost } from './../../interfaces/interfaces';

const BLOGS = [
  {
    id: '1',
    author: 'steven',
    title: 'my first blog',
    text: 'This is my blog. There are many blogs but this one is mine.',
  },
  {
    id: '2',
    author: 'steven',
    title: 'another blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisi id nisl hendrerit pretium quis et dui. Suspendisse potenti. Morbi sollicitudin mi non nunc venenatis, a pretium est porttitor. Fusce ornare quam ac ipsum lobortis, nec gravida turpis dictum. Nam a accumsan turpis, in facilisis augue. Duis tempor ex tortor, sit amet congue quam imperdiet sed. Donec efficitur laoreet lorem, eu iaculis risus dapibus eget. Cras molestie consectetur nisl, aliquam ultrices ex tincidunt quis. Duis pharetra lacus sed aliquet mollis. Mauris et nisl ut nulla venenatis aliquet interdum ullamcorper augue. Quisque ac posuere felis. Praesent quis sollicitudin lectus, a aliquet lectus. Nullam malesuada rutrum eros, id pellentesque neque elementum a. Aenean ornare felis tortor. In nisi justo, tristique scelerisque leo id, rutrum faucibus nulla. Fusce laoreet laoreet sapien et consectetur. Nulla facilisi. Nunc tempus, ex nec dignissim mattis, turpis risus consectetur augue, sagittis tincidunt orci tortor interdum ligula. Aenean at vehicula tellus. Suspendisse ut malesuada magna, ut commodo enim. Donec arcu nibh, placerat sit amet egestas id, faucibus sit amet quam. Integer posuere massa in mauris volutpat, ut dapibus sapien aliquet. Proin eu turpis porta, viverra eros ut, congue diam.',
  },
  {
    id: '3',
    author: 'andrew',
    title: 'heres a guest one',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque eu. Curabitur vitae nunc sed velit dignissim sodales ut. Mi tempus imperdiet nulla malesuada pellentesque. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.',
  },
];

export const getBlogs = (): IBlogPost[] => BLOGS;