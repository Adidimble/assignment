import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-secondary" onClick={handleSearch}>
        Search
      </Button>
    </InputGroup>
  );
};

export default SearchFilter;
