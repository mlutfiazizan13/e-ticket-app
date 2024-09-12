import Image from "next/image";
import { FC } from "react";

interface HeroSectionProps{}

const HeroSection:FC<HeroSectionProps> = () => {
    return ( 
        <section className="mb-3">
            <div className="md:hidden">
                <Image alt="banner-1" src="https://cdn.evbstatic.com/s3-build/fe/build/images/9751dd52cf8fb822f9f159382310d572-1_mobile_659x494.webp" height={500} width={767} />
            </div>
            <div className="hidden md:inline-flex lg:hidden">
                <Image alt="banner-2" src="https://cdn.evbstatic.com/s3-build/fe/build/images/885cab8c762d17c70c11d259433e9145-1_tablet_1067x470.webp" height={500} width={1023} />
            </div>
            <div className="hidden lg:inline-flex xl:hidden">
                <Image alt="banner-3" src="https://cdn.evbstatic.com/s3-build/fe/build/images/885cab8c762d17c70c11d259433e9145-1_tablet_1067x470.webp" height={500} width={1400} />
            </div>
            <div className="hidden xl:inline-flex">
                <Image alt="banner-4" height={500} width={2000} src="https://cdn.evbstatic.com/s3-build/fe/build/images/1329d3fa0bbfbc6afebbf10bfaa6a09a-1_web_1919x543.webp" />
            </div>
        </section>
     );
}
 
export default HeroSection;