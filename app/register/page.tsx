import { Layout } from '../components/Layout';
import { NavigationBar } from '../components/NavigationBar';
import { Register } from '../components/Register';

export default function LoginPage() {
  return (
    <Layout>
      <NavigationBar title='Register'/>
      <Register/>
    </Layout>
  );
}
