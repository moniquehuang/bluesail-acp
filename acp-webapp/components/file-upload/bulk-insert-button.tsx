'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function BulkInsertButton() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/protected/upload');
  };

  return <Button onClick={handleClick}>Bulk Insert Users</Button>
}
