import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { SearchBarProps } from './type';

const SearchBar: React.FC<SearchBarProps> = ({ onChangeText, text, onClear }) => {
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
        data-testid="search-input-testid"
        type="text"
        className="outline-none flex flex-1 bg-transparent pl-8 pr-8 py-1 rounded-md placeholder-neutral-medium text-neutral-medium focus:outline-none focus:ring-2 focus:ring-secondary-dark"
        placeholder="Search..."
        onChange={e => onChangeText(e.target.value)}
        value={text}
      />
      {onClear && text && (<div className="flex absolute h-full right-3 top-4 mx-2 cursor-pointer">
        <FontAwesomeIcon
          icon={faTimes}
          size="sm"
          className="text-neutral-medium"
          onClick={onClear}
        />
      </div>)}
    </div>
  );
};

export default SearchBar;
