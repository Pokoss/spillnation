import{a as e,j as a}from"./jsx-runtime-cce8ccb5.js";import{a as k,r as g,e as A}from"./app-837f3fee.js";import{A as F}from"./AdminLayout-69c85887.js";import{Q as d}from"./ReactToastify-def2d4f8.js";import{C as I}from"./compressor.esm-c92a6300.js";import{l as D}from"./index-a32beab4.js";const _=({postData:n,comments:j,categories:p})=>{const{data:o,setData:c,post:h,put:b,errors:l,delete:x}=k(n),[m,u]=g.useState(null);g.useState("");const i=t=>c(t.target.id,t.target.value),f=t=>{t.preventDefault(),o.slug?b("",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{d.success("Changes saved")}}):h("/admin/blog",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{d.success("Changes saved")}})},y=t=>{x("")};function v(t){const C=t.target.files[0];new I(C,{quality:.2,success(r){const s=new FileReader;n?A.Inertia.post(`/admin/blog/${n.slug}/image`,{result:r},{preserveScroll:!0,preserveState:!0,onSuccess:()=>{s.readAsDataURL(r),s.onload=()=>u(s.result),d.success("Image saved")}}):(s.readAsDataURL(r),s.onload=()=>u(s.result),c("image",r))},error(r){console.log(r.message)}})}const w={toolbar:[[{header:[1,2,!1]},{font:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],[{direction:"rtl"},{align:[]}],["link","image","video","formula"],["clean"]]},N=["header","font","size","bold","italic","underline","align","strike","script","blockquote","background","list","bullet","indent","link","image","color","code-block"],S=t=>{c("content",t)};return e("div",{className:"my-5",children:a("form",{onSubmit:f,className:"flex flex-col-reverse lg:flex-row lg:space-x-10 bg-white px-5",children:[a("div",{className:"lg:w-2/3 mt-10 lg:mt-0",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleContent",children:"Article Content"}),e(D,{theme:"snow",modules:w,formats:N,value:o.content,onChange:S,style:{fontSize:"25px",lineHeight:"2.0"}}),l.content&&e("span",{className:"text-xs text-red-500",children:l.content})]}),a("div",{className:"w-full lg:w-1/3",children:[a("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleTitle",children:"Article Title"}),e("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"title",type:"text",placeholder:"Article Title",value:o.title??"",onChange:i}),l.title&&e("span",{className:"text-xs text-red-500",children:l.title})]}),a("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleTitle",children:"Article Description or Summary"}),e("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"description",type:"text",rows:5,placeholder:"Article Description(Make very it Short about 50 words)",value:o.description,onChange:i}),l.description&&e("span",{className:"text-xs text-red-500",children:l.description})]}),a("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleCategory",children:"Article Category"}),a("select",{placeholder:"Article Category",id:"category",value:o.category,onChange:i,className:"w-full p-2.5 text-gray-700 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600",children:[e("option",{value:0,children:"Select a category...."}),p.map(t=>e("option",{value:t.id,children:t.name},t.id))]}),l.category&&e("span",{className:"text-xs text-red-500",children:l.category})]}),a("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleImage",children:"Article Image"}),(m||o.imageurl)&&e("img",{src:m??`/${o.imageurl}`,alt:"Selected image"}),e("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"image",type:"file",accept:"image/*",onChange:v}),l.image&&e("span",{className:"text-xs text-red-500",children:l.image})]}),a("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"image_description",children:"Image description"}),e("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"image_description",type:"text",placeholder:"Image description",value:o.image_description??"",onChange:i}),l.image_description&&e("span",{className:"text-xs text-red-500",children:l.image_description})]}),a("div",{className:"flex items-center justify-between",children:[e("button",{className:"bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Save Article"}),o.slug&&e("button",{onClick:y,className:"bg-red-500 hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",children:"Delete"})]})]})]})})};_.layout=n=>e(F,{children:n});export{_ as default};
