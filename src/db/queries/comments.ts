import { Comment } from '@prisma/client';
import { cache } from 'react';
import { db } from '@/db';

export type CommentWithUser = 
  Comment & 
  { user: 
    { id: number; 
      name: string | null;
      image: string | null; 
    } 
  };

  export const fetchCommentsByPostId = cache((postId: string): Promise<CommentWithUser[]> => {
    console.log('fetchCommentsByPostId');
    return db.comment.findMany({
      where: { postId },
      include: { user: { select: { id: true, name: true, image: true } } },
    });
  });