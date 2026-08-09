import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer
            id="site-footer"
            className="border-t border-[#2A2A2A] mt-12 bg-[#0D0D0D]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

                {/* Brand section */}
                <div className="flex items-center gap-3 mb-10">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/Enbrero.svg"
                            alt="Embrero Logo"
                            className="w-12 h-12 rounded-[12px] object-cover transition-all duration-[250ms] group-hover:shadow-[0_8px_24px_rgba(255,107,53,0.4)] group-hover:scale-105"
                        />
                        <div>
                            <span className="text-xl font-extrabold tracking-tight text-[#F5F5F5] block">
                                Embrero<span className="text-[#FF6B35]">Explorer</span>
                            </span>
                            <span className="text-xs text-[#71717A]">Discover your next favorite film</span>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

                    <div>
                        <h4 className="text-sm font-bold text-[#F5F5F5] tracking-wider uppercase mb-4">
                            About
                        </h4>

                        <ul className="space-y-3">
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">About Us</Link></li>
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Careers</Link></li>
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Press</Link></li>
                        </ul>
                    </div>



                    <div>
                        <h4 className="text-sm font-bold text-[#F5F5F5] tracking-wider uppercase mb-4">
                            Categories
                        </h4>

                        <ul className="space-y-3">
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Action</Link></li>
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Drama</Link></li>
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Sci-Fi</Link></li>
                        </ul>
                    </div>




                    <div>
                        <h4 className="text-sm font-bold text-[#F5F5F5] tracking-wider uppercase mb-4">
                            Account
                        </h4>

                        <ul className="space-y-3">
                            <li><Link to="/profile" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">My Profile</Link></li>
                            <li><Link to="/watchlist" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Watchlist</Link></li>
                            <li><Link to="/login" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Sign In</Link></li>
                        </ul>
                    </div>




                    <div>
                        <h4 className="text-sm font-bold text-[#F5F5F5] tracking-wider uppercase mb-4">
                            Legal
                        </h4>

                        <ul className="space-y-3">
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Terms of Service</Link></li>
                            <li><Link to="#" className="text-sm text-[#A1A1AA] hover:text-[#FF6B35]">Cookie Policy</Link></li>
                        </ul>
                    </div>

                </div>



                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#2A2A2A] gap-4">

                    <p className="text-sm text-[#71717A]">
                        © 2024 EmbreroExplorer. All rights reserved.
                    </p>

                    <div className="flex gap-3">

                        <Link
                            to="#"
                            className="w-9 h-9 rounded-[10px] bg-[#1C1C1C] flex items-center justify-center text-[#A1A1AA] hover:text-[#FF6B35] hover:bg-[#FF6B351A]"
                        >
                            <i className="fa-brands fa-x-twitter text-sm"></i>
                        </Link>

                        <Link
                            to="#"
                            className="w-9 h-9 rounded-[10px] bg-[#1C1C1C] flex items-center justify-center text-[#A1A1AA] hover:text-[#FF6B35] hover:bg-[#FF6B351A]"
                        >
                            <i className="fa-brands fa-instagram text-sm"></i>
                        </Link>

                        <Link
                            to="#"
                            className="w-9 h-9 rounded-[10px] bg-[#1C1C1C] flex items-center justify-center text-[#A1A1AA] hover:text-[#FF6B35] hover:bg-[#FF6B351A]"
                        >
                            <i className="fa-brands fa-github text-sm"></i>
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;