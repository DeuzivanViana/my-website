import { cookies } from 'next/headers'
import { Layout } from '../components/Layout'
import { Post } from '../components/Post';

export default function PostPage() {
  const cookieStore = cookies()

  return (
    <Layout>
      { cookieStore.get('session') == null ? <></> : <Post session={cookieStore.get('session')?.value}/> }
    </Layout>
  );
}
