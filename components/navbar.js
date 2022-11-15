export default function Navbar() {
    return (
        <nav className="navbar bg-gray-100 text-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-gray-100 w-52">
                        <li>
                            <a>Le cabinet</a>
                        </li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Expertise
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                </svg>
                            </a>
                            <ul className="p-2 bg-gray-100">
                                <li>
                                    <a>Droit du travail</a>
                                </li>
                                <li>
                                    <a>Droit de la <br/> sécurité sociale</a>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Comment ça marche ?
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                </svg>
                            </a>
                            <ul className="p-2 bg-gray-100">
                                <li>
                                    <a>Honoraires</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Actualités</a>
                        </li>
                        <li>
                            <a>Documentation</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Cabinet Babeau</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <a>Le cabinet</a>
                    </li>
                    <li tabIndex="0">
                        <a>
                            Expertise
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                 viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                            </svg>
                        </a>
                        <ul className="p-2 bg-gray-100">
                            <li tabIndex="1">
                                <a>
                                    Droit du travail
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                    </svg>
                                </a>
                                <ul className="p-2 bg-gray-100">
                                    <li>
                                        <a>
                                            - Conseils
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            - Contentieux
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li tabIndex="1">
                                <a>
                                    Droit de la sécurité sociale
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                    </svg>
                                </a>
                                <ul className="p-2 bg-gray-100">
                                    <li>
                                        <a>
                                            - Conseils
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            - Contentieux
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li tabIndex="1">
                        <a>
                            Comment ça marche ?
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                 viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                            </svg>
                        </a>
                        <ul className="p-2 bg-gray-100">
                            <li>
                                <a>Honoraires</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Actualités</a>
                    </li>
                    <li>
                        <a>Documentation</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}