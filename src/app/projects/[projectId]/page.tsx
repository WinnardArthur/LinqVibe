import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import { ProjectView } from "@/modules/projects/ui/views/project-view";

import { getQueryClient, trpc } from "@/trpc/server";

interface Props {
  params: Promise<{ projectId: string }>;
}

const Page = async ({ params }: Props) => {
  const { projectId } = await params;

  const queryClient = getQueryClient();

  // Prefetch messages of current project
  await queryClient.prefetchQuery(
    trpc.messages.getMany.queryOptions({ projectId })
  );

  // Prefetch project
  await queryClient.prefetchQuery(
    trpc.projects.getOne.queryOptions({ id: projectId })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <ProjectView projectId={projectId} />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

export default Page;
