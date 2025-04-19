'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/auth/login');
  };
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='text-4xl font-bold'>Welcome to the ACP Web App</h1>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <Button onClick={handleClick} className="mt-4 text-center text-sm">Go to Login</Button>
      </main>
    </div>
  );
}
