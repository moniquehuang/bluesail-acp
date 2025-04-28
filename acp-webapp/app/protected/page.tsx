import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import ProtectedPageClient from './ProtectedPageClient';

export default async function ProtectedPage() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect('/auth/login');
    }

    return <ProtectedPageClient />;
}