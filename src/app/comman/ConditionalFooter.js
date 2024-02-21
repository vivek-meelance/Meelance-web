'use client'
import { usePathname } from 'next/navigation';
import Footer from './Footer';

const ConditionalFooter = () => {
  const pathname = usePathname();
  return (
    <div>
        {pathname === '/' || pathname === '/login' || pathname === '/register' ? <Footer/> : ""}
    </div>
  )
}

export default ConditionalFooter