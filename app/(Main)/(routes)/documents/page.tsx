"use client";

import Image from 'next/image';
import { useUser } from "@clerk/clerk-react";

import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';


const Documents = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "untitled"
    }).then ((documentId) => router.push(`/documents/${documentId}`))
    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'Note created',
      error: 'Failed to create New Note'
    });
  };


  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        src="/empty.png"
        height={300}
        width={300}
        alt="empty"
        className="dark:hidden" />

      <Image
        src="/empty-dark.png"
        height={300}
        width={300}
        alt="empty"
        className="hidden dark:block"

      />

      <h2 className='text-lg font-medium'>
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate} >
        <PlusCircle className='h-4 w-4 mr-2' />
        Create a Note
      </Button>
    </div>
  );
}

export default Documents;