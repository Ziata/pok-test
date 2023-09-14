import styles from "./search.module.sass";

const Search = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name..."
      />
    </div>
  );
};

export default Search;
