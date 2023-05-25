import{a as e,j as l}from"./jsx-runtime-32d4ae20.js";import{u as i,a as c,L as o}from"./app-7c8833a6.js";function h(){const{errors:t}=i().props,{data:a,post:d,setData:s}=c();return e("div",{children:l("section",{className:"flex flex-col md:flex-row h-screen items-center",children:[e("div",{className:"bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen",children:e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/JUBA_VIEW.jpg/800px-JUBA_VIEW.jpg",alt:"",className:"w-full h-full object-cover"})}),e("div",{className:`bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12\r
      flex items-center justify-center`,children:l("div",{className:"w-full h-100",children:[e("h1",{className:"text-xl md:text-2xl font-bold leading-tight mt-12",children:"Login to your account"}),l("form",{className:"mt-6",onSubmit:r=>{r.preventDefault(),d("",{forceFormData:!0,preserveScroll:!0,preserveState:!0})},children:[l("div",{children:[e("label",{className:"block text-gray-700",children:"Email Address"}),e("input",{type:"email",value:a.email??"",onChange:r=>s("email",r.target.value),name:"email",id:"email",placeholder:"Enter Email Address",className:"w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none",autoFocus:!0,required:!0}),t.email&&e("div",{className:"text-sm text-red-500",children:t.email})]}),l("div",{className:"mt-4",children:[e("label",{className:"block text-gray-700",children:"Password"}),e("input",{type:"password",value:a.password??"",onChange:r=>s("password",r.target.value),name:"password",id:"password",placeholder:"Enter Password",minLength:"6",className:`w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500\r
              focus:bg-white focus:outline-none`,required:!0}),t.password&&e("div",{className:"text-sm text-red-500",children:t.password})]}),e("input",{class:"hidden",type:"checkbox",name:"remember",id:"remember"}),e("div",{className:"text-right mt-2",children:e(o,{href:"#",className:"text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700",children:"Forgot Password?"})}),e("button",{type:"submit",className:"w-full block bg-primary hover:bg-yellow-700 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6",children:"Log In"})]}),e("hr",{className:"my-6 border-gray-300 w-full"}),l("p",{className:"mt-8",children:["Need an account? ",e(o,{href:"/register",className:"text-blue-500 hover:text-blue-700 font-semibold",children:"Create an account"})]})]})})]})})}export{h as default};
