import{a as e,j as i,F as s}from"./jsx-runtime-64935ae4.js";import{L as r}from"./app-6bbcd392.js";import{B as h}from"./BlogListCard-77772a31.js";import{B as g}from"./BlogAsideCard-b04bfc72.js";import{L as f}from"./Layout-40bdf659.js";import"./index-e8156bbd.js";import"./ReactToastify-dce0340f.js";function u({title:t,content:a,time:d,image:n}){return e("div",{children:i("div",{className:"w-full rounded-lg lg:max-w-sm",children:[e("img",{className:"object-cover w-full h-48",src:"/"+n,alt:"image"}),i("div",{className:"p-4",children:[e("h3",{className:"text-lg font-bold mb-1 line-clamp-2 hover:underline",children:t}),e("p",{className:"mb-2 leading-normal text-gray-500 line-clamp-2",children:a}),e("p",{className:"text-gray-500 mb-1",children:e("small",{children:e("u",{children:new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})})]})]})})}function p({title:t,time:a,image:d}){return e("div",{children:e("div",{className:"py-2 border-t border-gray-400",children:i("div",{className:"flex flex-wrap lg:flex-nowrap items-center",children:[e("div",{className:"w-full lg:w-auto mr-2 mb-8 lg:mb-0",children:e("img",{className:"block w-40 h-16 object-cover",src:"/"+d,alt:""})}),e("div",{className:"w-full lg:w-9/12 mr-2 mb-10 lg:mb-0",children:e("div",{className:"max-w-2xl",children:e("h3",{className:"text-sm font-semibold line-clamp-3 hover:underline",children:t})})})]})})})}function b({latest:t,latests:a,blog:d,blog_category:n,trending_posts:o}){return i(s,{children:[i("section",{className:"flex flex-col lg:flex-row lg:space-x-5 justify-between items-center bg-black p-2 lg:p-10",children:[e("div",{className:"w-full lg:w-2/4",children:e(r,{href:"/"+t.slug,title:t.title,children:e("img",{src:t.imageurl,alt:t.title,className:"h-72 lg:h-96 w-full object-cover"})})}),i("div",{className:"lg:flex-1 space-y-4 mt-2 sm:text-center text-left",children:[e("h1",{className:"text-2xl lg:text-3xl font-bold text-blue-500 hover:underline text-left line-clamp-4",children:e(r,{href:"/"+t.slug,children:t.title})}),e("p",{className:"max-w-xl text-lg leading-relaxed text-gray-50 sm:mx-auto lg:ml-0 text-left line-clamp-5",children:t.description}),e(r,{href:"/"+t.slug,title:t.title,className:"block text-primary rounded-md hover:underline text-left",children:"Read more"})]}),i("div",{className:"hidden md:block w-full lg:w-1/4 text-gray-50",children:[e("h2",{className:"font-semibold text-lg",children:"LATEST ARTICLES"}),a&&a.map((l,m)=>e(r,{href:"/"+l.slug,children:e(p,{image:l.imageurl,title:l.title})},m))]})]}),i("div",{id:"whole-page",className:"container mx-auto flex flex-wrap pb-6",children:[i("section",{id:"left",className:"w-full md:w-2/3 flex flex-col items-center px-3 divide-y-2 divide-blue-200",children:[i("div",{className:"w-full justify-start mb-5",children:[e("h2",{className:"ml-6 mb-2 mt-5 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl",children:e("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-blue-900",children:"Latest"})}),e("div",{className:"grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5",children:a&&a.map((l,m)=>e(r,{href:"/"+l.slug,children:e(u,{title:l.title,content:l.description,time:l.updated_at,image:l.imageurl})},m))})]}),e("div",{className:"w-full justify-start",children:n&&n.map((l,m)=>e("div",{children:l.blog.length==0?e(s,{}):i(s,{children:[e("h2",{className:"ml-6 mb-2 my-10 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl",children:i("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-blue-900",children:["  ",l.name]})}),l.blog.map((c,x)=>e(r,{href:"/"+c.slug,children:e(h,{image:c.imageurl,title:c.title,description:c.description,time:c.created_at},c.id)},x)),e(r,{href:"/category/"+l.slug,type:"submit",className:"m-2 p-2 text-sm font-medium text-white bg-gradient-to-r to-black from-blue-900  focus:ring-4 focus:outline-none",children:"More "+l.name})]})},m))})]}),e("aside",{id:"right",className:"w-full md:w-1/3 flex flex-col items-center px-3",children:i("div",{className:"sticky top-20",children:[e("h2",{className:"ml-6 mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-sm",children:e("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-blue-900",children:"Trending Posts"})}),o&&o.map((l,m)=>e(r,{href:"/"+l.slug,children:e(g,{image:l.imageurl,title:l.title,time:l.created_at})},m))]})})]})]})}b.layout=t=>e(f,{children:t});export{b as default};