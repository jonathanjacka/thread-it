import Link from 'next/link';
import paths from '@/paths';
import { fetchCommentsByPostId } from '@/db/queries/comments';
import { Button } from "@nextui-org/react";
import PostShow from "@/components/posts/PostShow";
import CommentCreateForm from '@/components/comments/CommentCreateForm';
import CommentList from '@/components/comments/CommentList';

interface ShowPostPageProps {
  params: {
    slug: string,
    postId: string
  }
}

const ShowPostPage = ( { params }: ShowPostPageProps ) => {
  return (
    <div className="space-y-3">
      <Link href={paths.topicShow(params.slug)}>
        <Button color='primary' variant="light">{'<'} Back to Topic</Button>
      </Link>

      <PostShow postId={params.postId} />
      <CommentCreateForm postId={params.postId} startOpen/>
      <CommentList fetchComments={ () => fetchCommentsByPostId(params.postId)} />
    </div>
  )
}

export default ShowPostPage
