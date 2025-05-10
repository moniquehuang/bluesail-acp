'use client'

import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/file-upload/dropzone'
import { useSupabaseUpload } from '@/hooks/use-supabase-upload'

const FileUploadDemo = () => {
  const props = useSupabaseUpload({
    bucketName: 'bulk-user-insert',
    path: 'test',
    allowedMimeTypes: ['text/csv'],
    maxFiles: 1,
    maxFileSize: 1000 * 1000 * 10, // 10MB,
  })

  return (
    <div className="w-[500px]">
      <Dropzone {...props}>
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  )
}

export { FileUploadDemo }
