import { Layout } from '../../components/Layout'
import { Profile } from '../../components/Profile';
import { NavigationBar } from '../../components/NavigationBar';

export default function LoginPage({params}: any) {
  return (
    <Layout>
      <NavigationBar title='View Profile'/>
      { <Profile params={params}/> }
    </Layout>
  );
}
