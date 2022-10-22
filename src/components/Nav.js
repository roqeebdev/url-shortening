const Nav = () => {
    return ( 
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-start">
                <div className="pt-2">
                    <img src="/images/logo.svg" alt="logo" />
                </div>

                <div className="hidden space-x-6 md:flex px-10 font-medium">
                    <a href="/taye" className="">Features</a>
                    <a href="/kenny" className="">Pricing</a>
                    <a href="/idowu" className="">Resources</a>
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <div className="text-sm font-medium">Login</div>
                    <button className="bg-lightGreen rounded-full px-6 py-2 mx-4 text-white font-medium text-sm">Sign Up</button>
            </div>

        </nav>
     );
}
 
export default Nav;