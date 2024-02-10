import { Comment } from '@prisma/client';
import { db } from '@/db';

export type CommentWithUser = 
  Comment & 
  { user: 
    { id: number; 
      name: string | null;
      image: string | null; 
    } 
  };

  export function fetchCommentsByPostId(postId: string): Promise<CommentWithUser[]> {
    return db.comment.findMany({
      where: { postId },
      include: { user: { select: { id: true, name: true, image: true } } },
    });
  }