import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
  return (
    <div className="flex relative w-full bg-primary-medium rounded-lg p-2">
      <div className="flex absolute h-full left-2 top-4 mx-2">
        <FontAwesomeIcon
          icon={faSearch}
          size="sm"
          className="text-neutral-medium"
        />
      </div>
      <input
        type="text"
        className="flex flex-1 bg-transparent pl-8 py-1 rounded-md placeholder-neutral-medium text-neutral-medium focus:outline-none focus:ring-2 focus:ring-secondary-dark"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
