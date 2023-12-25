import { Layout } from '../../../components/Layout';
import { CircleLoader, OAuthCallback } from '@atomicleads/ext-satellite-form';
import { useRouter } from 'next/router';

function Login() {
    const router = useRouter();
    const { provider } = router.query;

    console.log('received callback from provider: ', provider);

    if (!provider) {
        return (
            <div className="auth-wrap">
                <CircleLoader size={128} />
            </div>
        );
    }

    return (
        <Layout>
            <OAuthCallback provider={provider as any} />
        </Layout>
    );
}

export default Login;
