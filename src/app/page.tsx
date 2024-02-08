import { Divider } from "@nextui-org/react";

import TopicCreateForm from "@/components/topics/TopicCreateForm";
import TopicsList from "@/components/topics/TopicsList";

export default function Home() {

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="flex flex-col justify-end border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2"/>
        <h3 className="text-lg mb-2">Topics</h3>
        <TopicsList />
      </div>
    </div>
  );
}
