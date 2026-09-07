import AdminPanel from './AdminPanel';

export const metadata = {
  title: 'SliceX Films | Studio Admin',
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminPage() {
  return <AdminPanel />;
}
