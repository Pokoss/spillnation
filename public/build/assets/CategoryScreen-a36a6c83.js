import{a as e,j as r}from"./jsx-runtime-32d4ae20.js";import{L as m}from"./app-7c8833a6.js";import{L as c}from"./Layout-a61b1e29.js";import{B as n}from"./BlogListCard-d83bb5b9.js";import{B as d}from"./BlogAsideCard-b00d98bf.js";import"./index-3176bf39.js";import"./ReactToastify-b10f9118.js";function o({blogs:a,category:s,trending_posts:i}){return e("div",{children:r("div",{className:"container mx-auto flex flex-wrap py-6",children:[e("section",{className:"w-full md:w-2/3 flex flex-col items-center px-3",children:r("div",{className:"w-full justify-start mb-5",children:[e("h1",{className:"ml-6 mb-4 w-full mt-5 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl capitalize",children:e("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-blue-900",children:s})}),a&&a.map((t,l)=>e(m,{href:"/"+t.slug,children:e(n,{title:t.title,description:t.description,time:t.updated_at,image:t.imageurl})},l)),a&&a.length==0&&e("div",{className:"flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10",children:e("span",{className:"mx-auto",children:"No posts found in this category"})})]})}),e("aside",{className:"w-full md:w-1/3 flex flex-col items-center px-3",children:r("div",{className:"sticky top-20",children:[e("h1",{className:"ml-6 w-full mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-sm",children:e("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500",children:"Trending Posts"})}),i&&i.map((t,l)=>e(m,{href:"/"+t.slug,children:e(d,{image:t.imageurl,title:t.title,time:t.created_at},l)},l))]})})]})})}o.layout=a=>e(c,{children:a});export{o as default};
