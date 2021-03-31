import Link from 'next/link';
import styled from 'styled-components';

interface HeaderProps {
  className: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => (
  <header className={className}>
    <figure>LOGO</figure>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const StyledHeader = styled(Header)`
  background: #eee;
`;

export default StyledHeader;
