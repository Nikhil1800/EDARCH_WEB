import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      subject: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitMessage(
        data.name,
        data.email,
        data.subject,
        data.message,
      );
    },
  });
}

export function useGetAllMessages() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMessages();
    },
    enabled: !!actor && !isFetching,
  });
}
