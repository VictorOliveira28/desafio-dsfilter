import { useContext } from "react";
import { ContextValue } from "../../utils/context-value";
import Filter from "./Filter";
import Listing from "./Listing";

export default function ListingBody() {
  const { setContextValue } = useContext(ContextValue);

  function handleFilter(min?: number, max?: number) {
    setContextValue({
      valueMin: min,
      valueMax: max,
    });
  }

  return (
    <main>
      <Filter onFilter={handleFilter} />
      <Listing />
    </main>
  );
}
