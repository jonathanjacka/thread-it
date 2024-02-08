import type { Post } from '@prisma/client';
import { db } from '@/db';

export type PostWithData =
  Post & {
    topic: {
      slug: string,
      name: string,
    };
    user: { name: string | null };
    _count: { comments: number };
  };

export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true, name: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function fetchTopicNameBySlug(slug: string): Promise<string> {
  return db.topic.findUnique({ where: { slug } }).then((topic) => topic!.name);
}