import { Layout } from '../components/Layout';
import { Login } from '../components/Login';
import { NavigationBar } from '../components/NavigationBar';

export default function LoginPage() {
  return (
    <Layout>
      <NavigationBar title='Login'/>
      <Login/>
    </Layout>
  );
}
