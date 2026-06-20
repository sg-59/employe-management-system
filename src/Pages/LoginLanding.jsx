import { Link } from "react-router"
import LoginLeftSide from "../Components/LoginLeftSide"
import {ArrowRightIcon, ShieldIcon, UserIcon} from 'lucide-react'

const LoginLanding = () => {

    const portalOptions=[
        {
            to:"/login/admin",
            title:"Admin Portal",
            description:"manage employees, departments, payroll, and system configurations.",
            icon:ShieldIcon
        },
        {
            to:"/login/employee",
            title:"Employe Portal",
            description:"View your profile, track attendance, request time off, and access payslips.",
            icon:UserIcon
        },
    ]

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
       <LoginLeftSide/>
       <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
       <div className="w-full max-w-md animate-fade-in relative z-10"> 

{/* {Headers} */}

<div className="mb-10 text-center md:text-left">
    <h2 className="text-3xl font-medium text-emerald-700 tracking-tight mb-3">Welcome Back</h2>
    <p className="text-slate-500">Select Your portal to securely access the system.</p>
</div>
{/* {Portals list} */}

<div className="space-y-4">
    {portalOptions.map((li)=>(
        <Link key={li.to} to={li.to} className="border-none group block bg-slate-50 border border-b-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50" >
            <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
                <h3 className="text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors">{li.title}</h3>
                <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300"/>
            </div>
        </Link>
    ))}
</div>
{/* {footer} */}
<div className="mt-12 text-center md:text-left text-sm text-slate-400">
    <p>© {new Date().getFullYear()} Karthikeya (sreerag). All rights reserved.</p>
</div>
       </div>
       </div>
    </div>
  )
}

export default LoginLanding
