import { FC, ReactNode } from 'react';
import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import logoFileSmart from '../images/assets/logo-file-smart-white.svg';
import logoIrs from '../images/assets/logo-IRS.png';
import logoBbb from '../images/assets/logo-bbb-sm.png';
import logoSsl from '../images/assets/logo-ssl.png';
import logoTrustArc from '../images/assets/logo-trust-arc.svg';
import logoSecureTrust from '../images/assets/logo-secure-trust.svg';
import logoAes from '../images/assets/logo-aes.png';
import iconMail from '../images/icons/icon-mail.png';
import iconLinkedin from '../images/icons/icon-linkedin.png';
import iconInstagram from '../images/icons/icon-instagram.png';
import iconFacebook from '../images/icons/icon-facebook.png';
import { parseCookies } from 'nookies';

interface Detail {
    title: string;
    disclaimersTitle: string;
    disclaimersDescription: string;
    termsText: string;
    privacyText: string;
    refundText: string;
    contactText: string;
    logo: string;
    isrLogo: any;
    bbbLogo: any;
    sslLogo: any;
    arcTrustLogo: string;
    secureTrustLogo: string;
    aesLogo: any;
    mailIcon: any;
    linkedinIcon: any;
    instagramIcon: any;
    facebookIcon: any;
    isHeaderVisible: boolean;
}
export const Layout: FC<{ children?: ReactNode; isHeaderVisible?: boolean }> = ({ children, isHeaderVisible }) => {
    let detail: Detail = {
        title: 'Empowering you to be smart with your finances all year-round.',
        disclaimersTitle: 'IMPORTANT DISCLAIMERS',
        disclaimersDescription:
            'FileSmart.tax is designated as an Authorized IRS e-file Provider. An Authorized IRS e-file Provider (Provider) is a business or organization authorized by the IRS to participate in the IRS e-file program. Our parent company had created accounts for more than 1 million U.S. taxpayers to assist with their tax filings.',
        termsText: 'Terms & Conditions',
        privacyText: 'Privacy Policy',
        refundText: 'Refund Policy',
        contactText: 'Contact Us',
        logo: logoFileSmart,
        isrLogo: logoIrs,
        bbbLogo: logoBbb,
        sslLogo: logoSsl,
        arcTrustLogo: logoTrustArc,
        secureTrustLogo: logoSecureTrust,
        aesLogo: logoAes,
        mailIcon: iconMail,
        linkedinIcon: iconLinkedin,
        instagramIcon: iconInstagram,
        facebookIcon: iconFacebook,
        isHeaderVisible: isHeaderVisible ? isHeaderVisible : false
    };

    return (
        <div className="content">
            <Header visibility={isHeaderVisible ?? false} centered={false} hamburgerMenu={false} />
            {children}
            <Footer details={detail} />
        </div>
    );
};
