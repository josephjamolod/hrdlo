import { IoSearchOutline } from "react-icons/io5";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => {
  return (
    <div className={styles.searchGroup}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
      <button className={styles.searchIcon}>
        <span>
          <IoSearchOutline style={{ fontSize: "1rem" }} />
        </span>
      </button>
    </div>
  );
};

export default SearchInput;
