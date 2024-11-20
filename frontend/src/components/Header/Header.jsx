import React, { useState } from 'react';
import './Header.scss';
import { User } from '../../assets/icon';
import DateFilter from '../Common/DateFilter/DateFilter';

const Header = ({ handleDateFilterApply, handleCancel }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [people] = useState(['John Doe', 'Jane Smith', 'Michael Johnson']); // List of people

  // Toggle the dropdown when the Person button is clicked
  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="SalesAnalyticsHeader">
      <div className="SalesAnalyticsHeader--between">
        <DateFilter onApply={handleDateFilterApply} onCancel={handleCancel} />

        {/* Person Button */}
        <div className="SalesAnalyticsHeader__person">
          <button className="person" onClick={toggleDropdown}>
            <User /> Person
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="person-dropdown">
              <ul>
                {people.map((person, index) => (
                  <li key={index} onClick={() => console.log(`${person} selected`)}>
                    {person}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
