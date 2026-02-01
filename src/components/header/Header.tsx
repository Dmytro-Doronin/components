import { useState } from 'react';
import { Logo } from "../logo/Logo.tsx";
import { Button } from "../ui/button/Button.tsx";
import { MobileMenu, MenuButton } from "../ui/mobileMenu/MobileMenu.tsx";
import {ControlPanel} from "../userPanel/UserPanel.tsx";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isAuth = false;
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
                    w-full h-[var(--header-height)]
                    bg-[#15141D40]
                    backdrop-blur-[12px]
                "
            >
                <div className="flex items-center justify-between mx-auto max-w-[1440px] h-full px-4 sm:px-6 md:px-8 lg:px-[151px]">
                    <Logo/>
                    <div className='hidden md:flex justify-center gap-4 sm:gap-6 lg:gap-7 border border-[#ffffff15] rounded-[20px] px-4 sm:px-6 lg:px-[38px]'>
                        <Button className='p-0 text-[#ffffff60] hover:text-light-100' variant='link'>Tutors</Button>
                        <Button className='p-0 text-[#ffffff60] hover:text-light-100' variant='link'>I want be tutor</Button>
                    </div>
                    {isAuth ? (
                        <div>is auth </div>
                    ) : (
                        <ControlPanel classNames=''/>
                    )}
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
