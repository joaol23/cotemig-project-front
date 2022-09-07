import { HeaderContainer, Logo, LogoContainer } from './style';
import Link from 'next/link'

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href='/'><a><Logo src="/images/derickLindo.png" /></a></Link>
            </LogoContainer>
        </HeaderContainer>
    )
}