import { FileUploadDemo } from "./upload-form";

export default function UploadPage() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <h1 className='text-4xl font-bold'>Bulk Insert Users</h1>
        <h2 className='text-2xl font-bold'>Upload CSV</h2>
        <p className='text-sm text-muted-foreground'>Upload a CSV file to bulk insert users into the database.</p>
        <p className='text-sm text-muted-foreground'>The CSV file should have the following columns: name, email, password.</p>
        <p className='text-sm text-muted-foreground'>Ensure the file is properly formatted before uploading.</p>
        <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
            <FileUploadDemo />
        </main>
    </div>
  )
}