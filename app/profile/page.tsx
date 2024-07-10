import { cookies } from 'next/headers'
import { Layout } from '../components/Layout'
import { Profile } from '../components/Profile';
import { NavigationBar } from '../components/NavigationBar';

export default function LoginPage() {
  const cookieStore = cookies()

  return (
    <Layout>
      <NavigationBar title='My Profile'/>
      { cookieStore.get('session') == null ? <></> : <Profile/> }
    </Layout>
  );
}
