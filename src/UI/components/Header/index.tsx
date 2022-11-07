import { HeaderContainer, Logo, LogoContainer, ButtonComeBack } from './style';
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
    const router = useRouter();
    const showButtonBack = !(router.route === "/")
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href='/'><a><Logo src="/images/logo.png" /></a></Link>
                {
                    showButtonBack ? <ButtonComeBack onClick={() => router.back()}><img src="/images/arrow-back.png" /></ButtonComeBack> : ''
                }                
            </LogoContainer>
        </HeaderContainer>
    )
}