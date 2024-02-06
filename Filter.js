import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Filter = ({ onFilter }) => {
    const [titleFilter, setTitleFilter] = useState('');
    const [rateFilter, setRateFilter] = useState('');

    const handleFilter = () => {
    onFilter({ title: titleFilter, rate: rateFilter });
};

return (
    <div className="filter">
        <Form.Control type="text" placeholder="Filter by Title" value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)}/><br/>
        <Form.Control type="number" placeholder="Filter by Rating" value={rateFilter} onChange={(e) => setRateFilter(e.target.value)}/><br/>
        <Button variant="secondary" onClick={handleFilter}>Apply Filter</Button>{' '}
    </div>
);
};

export default Filter;