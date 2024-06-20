import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => (
  <Image
    src="/img/logo.png"
    alt="Logo"
    width={100}
    height={100}
    className={className}
  />
);
