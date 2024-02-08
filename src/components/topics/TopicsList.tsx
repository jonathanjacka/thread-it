import Link from "next/link";
import  { Chip } from '@nextui-org/react';
import { db } from '@/db';
import paths from '@/paths';
import { Topic } from "@prisma/client";

const TopicsList = async () => {

  const topics = await db.topic.findMany();

  const renderTopics = topics.map((topic: Topic) => {
    return <div key={topic.id}>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color='warning' variant="shadow">
          {topic.name}
        </Chip>
      </Link>
    </div>
  });

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {renderTopics}
    </div>
  )
}

export default TopicsList
