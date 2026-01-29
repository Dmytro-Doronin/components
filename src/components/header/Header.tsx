import { useState } from 'react';
import {Logo} from "../logo/Logo.tsx";
import {Button} from "../ui/button/Button.tsx";
import {MobileMenu, MenuButton} from "../ui/mobileMenu/MobileMenu.tsx";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className="
                    fixed top-0 left-0 z-50
                    w-full h-[90px]
                    bg-[#15141D40]
                    backdrop-blur-[12px]
          "
            >
                <div className="flex items-center justify-between mx-auto max-w-[1440px] h-full px-4">
                    <Logo/>
                    <div className='hidden lg:flex justify-center gap-7 border border-[#ffffff15] rounded-[20px] px-[38px]'
                    >
                        <Button className='p-0 text-[#ffffff60] hover:text-light-100' variant='link'>Tutors</Button>
                        <Button className='p-0 text-[#ffffff60] hover:text-light-100 ' variant='link'>I want be tutor</Button>
                    </div>
                    
                    <Button variant='secondary' className='hidden lg:block'>Sign in</Button>
                    
                    <MenuButton 
                        onClick={handleMobileMenuToggle}
                        isOpen={isMobileMenuOpen}
                    />
                </div>
            </header>

            <MobileMenu 
                isOpen={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            />
        </>
    );
};

