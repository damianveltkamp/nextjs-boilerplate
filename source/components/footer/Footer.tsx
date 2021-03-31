import Link from 'next/link';
import styled from 'styled-components';

interface FooterProps {
  className: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={className}>
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
  </footer>
);

const StyledFooter = styled(Footer)`
  background: #eee;
`;
export default StyledFooter;
