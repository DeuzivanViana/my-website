import { cookies } from 'next/headers';
import { Layout } from '../components/Layout';
import { NavigationBar } from '../components/NavigationBar';
import { NotLogged } from '../components/NotLogged';
import { Home } from '../components/Home';

export default function HomePage() {
  const cookieStore = cookies()

  return (
    <Layout>
      <NavigationBar title='Home'/>
      {
        cookieStore.get('session')?.value == null ? <NotLogged/> : <></>
      }
      <Home/>
    </Layout>
  );
}
