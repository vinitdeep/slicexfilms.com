import SiteFrame from '../../components/SiteFrame';

export default function HomeLayout({ children }) {
  return <SiteFrame theme="home">{children}</SiteFrame>;
}
