export default function Navbar() { 
  return (
    <nav className="shadow-lg  nav-container fixed top-0 w-full z-50 ">
    <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-100 md:text-3xl">
            <p>Fitness <span className=' text-orange-400'>AI</span></p>
            </div>
            <div className="md:hidden">
                <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                </button >
            </div>
        </div>
        <div className="flex flex-col md:flex-row md:block -mx-2">
            <a href="/chatloginn" className="py-2 px-2 rounded bg-orange-500 text-gray-100  md:mx-2 font-bold bg-opacity-40 hover:bg-slate-400 hover:bg-opacity-30">Messages</a>
            <a href="/ExerciseDete" className="py-2 px-2 rounded bg-orange-500 text-gray-100  md:mx-2 font-bold bg-opacity-40  hover:bg-slate-400 hover:bg-opacity-30">Exercise lists</a>
            <a href="/Calculator" className="py-2 px-2 rounded bg-orange-500 text-gray-100  md:mx-2 font-bold bg-opacity-40 hover:bg-slate-400 hover:bg-opacity-30" >calculate fitness </a>
<a href="./">
            <button className="text-gray-100 rounded  bg-orange-500 hover:bg-slate-500 hover:font-medium py-2 px-2 md:mx-2 font-bold focus:outline-none bg-opacity-40">
                <svg className="h-4 w-6 fill-current" viewBox="0 4 17 7">
                <path d="M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5" stroke="#000000"/>
                 </svg>
            </button>
            </a>
        </div>
       
    </div>
</nav>
  )
}
