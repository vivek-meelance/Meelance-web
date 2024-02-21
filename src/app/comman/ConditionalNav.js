'use client'
import { usePathname } from 'next/navigation';
import Header from './Header';
import ProfileNavbar from '../components/ProfileNavbar';

const ConditionalNav = () => {
    const pathname = usePathname()
  return (
    <div className='sticky top-0'>
        {pathname === '/' || pathname === '/login' || pathname === '/register' ? <Header /> : <ProfileNavbar />}
    </div>
  )
}

export default ConditionalNav