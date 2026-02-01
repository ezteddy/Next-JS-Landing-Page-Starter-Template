import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'源头工厂直发\n'}
            <span className="智能电动升降桌">React developers</span>
          </>
        }
        description="出口级双电机驱动，静音稳固。为久坐族打造的健康办公神器，告别腰酸背痛"
        button={
          <Link href="">
            <Button xl>查看热销款式</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
