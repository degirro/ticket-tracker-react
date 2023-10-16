import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { WorkspaceType } from "../types/types";

export const useWorkspacesData = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<WorkspaceType[]>("userWorkspacesData");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    queryClient.invalidateQueries("userWorkspacesData");
  }, [searchQuery]);

  const filteredData = data
    ?.filter((workspace: WorkspaceType) => {
      if (
        searchQuery !== "" &&
        !workspace.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .reverse();

  return {
    handleSearch,
    filteredData,
  };
};
